'use strict';
(()=>{function updateDate(){const d=new Date();document.getElementById('local-date').textContent=d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0')+' '+['일','월','화','수','목','금','토'][d.getDay()]+'요일';}updateDate();setInterval(updateDate,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)updateDate();});})();
