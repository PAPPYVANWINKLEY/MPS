'use strict';
(()=>{
const b=document.getElementById('local-weather');let busy=false,last=0,enabled=false;
async function json(url){const c=new AbortController(),t=setTimeout(()=>c.abort(),12000);try{const r=await fetch(url,{signal:c.signal,credentials:'omit'});if(!r.ok)throw Error();return await r.json();}finally{clearTimeout(t);}}
function sky(c,d){if(c===0)return d?'☀ 맑음':'☾ 맑음';if(c<=3)return '☁ 구름';if(c===45||c===48)return '🌫 안개';if(c>=95)return '⛈ 뇌우';if([71,73,75,77,85,86].includes(c))return '❄ 눈';return '☂ 비';}
async function refresh(){if(busy)return;if(!navigator.geolocation){b.textContent='위치 기능 사용 불가';return;}busy=true;b.disabled=true;b.textContent='위치 확인 중…';
try{const p=await new Promise((ok,no)=>navigator.geolocation.getCurrentPosition(ok,no,{enableHighAccuracy:false,timeout:10000,maximumAge:300000}));
const q='latitude='+p.coords.latitude+'&longitude='+p.coords.longitude;
const [a,w]=await Promise.allSettled([json('https://api.bigdatacloud.net/data/reverse-geocode-client?'+q+'&localityLanguage=ko'),json('https://api.open-meteo.com/v1/forecast?'+q+'&current=temperature_2m,weather_code,is_day&timezone=auto')]);
const place=a.status==='fulfilled'?a.value:{},current=w.status==='fulfilled'?w.value.current:null;
const area=place.locality||place.city||place.principalSubdivision||'현재 위치';
if(!current||!Number.isFinite(current.temperature_2m))throw Error();
b.textContent=area+' '+sky(current.weather_code,current.is_day)+' '+Math.round(current.temperature_2m)+'°';
b.title='현재 위치 기준 · 눌러서 갱신';last=Date.now();enabled=true;
}catch(e){b.textContent=e.code===1?'위치 허용 후 날씨 보기':'내 동네 날씨 · 재시도';last=0;}finally{busy=false;b.disabled=false;}}
document.getElementById('lead').addEventListener('click',()=>{enabled=true;refresh();});
b.onclick=()=>{if(!enabled){location.hash='';document.getElementById('lead').focus();return;}refresh();};
setInterval(()=>{if(enabled&&last&&!document.hidden&&Date.now()-last>900000)refresh();},60000);
})();