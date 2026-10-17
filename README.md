# 동대문 글로벌 타임즈 — Codex 인계 패키지

2026-10-17 기준, RP 작품 「내 보물단지」 홍보 사이트.
현재 테스트 주소: https://gwanghui24-sunae.blithecat8.chatgpt.site

## 구성
- dist/index.html: 입장 화면, 기사, 광고, 기본 레이아웃
- dist/style.css: 모든 스타일과 모바일 대응
- dist/app.js: 진입, 음악, 댓글, 광고 등 동작
- dist/world.js: NPC/장소/사장 프로필/가게/달력 데이터 및 화면
- dist/assets/: 사용 중인 이미지 및 OST
- AGENTS.md: Codex가 먼저 읽을 작업 지침
- context/HANDOFF.md: 대화에서 결정한 사항과 변경 이유
- context/ASSET_MANIFEST.json: 파일 크기와 SHA256

## 실행
빌드·npm 설치가 필요 없는 정적 사이트다.

```bash
python3 -m http.server 8000 --directory dist
```

http://localhost:8000 으로 연다. 루트는 썸네일 입장 화면이며 #article은 기사 진입용이다.

## 웹 Codex에 넘기기
1. 이 저장소의 main 브랜치를 사용한다.
2. 웹 Codex에서 해당 GitHub 저장소를 연결/선택한다.
3. 아래 문장을 첫 작업으로 입력한다.

> AGENTS.md와 context/HANDOFF.md를 먼저 읽고 기존 사이트 작업을 이어받아줘. dist가 현재 완성본이고 이미지와 음원도 포함되어 있어. 먼저 현재 구현과 인계 내용을 대조해서 작업 상태를 파악해줘. 임의 리디자인이나 React/Tailwind 전환은 하지 말고, 다음 수정 요청을 받을 준비를 해줘.

GitHub 저장소: https://github.com/PAPPYVANWINKLEY/MPS
사이트 코드와 인계 문서를 이 저장소에 업로드했다. 웹 Codex에서 이 저장소를 선택하여 작업한다.
기존 ChatGPT 대화 전체 원문이나 계정 메모리가 이 파일에 자동 연결되는 것은 아니다.
이 패키지는 확인 가능한 대화의 결정사항과 실제 소스를 인계하는 스냅샷이다.
원본 업로드 PNG/미사용 시안 전체는 없으며 현재 사이트에서 사용하는 최적화 이미지와 음원은 모두 포함한다.

## 배포
정적 호스팅의 게시 폴더를 dist로 설정한다.
GitHub Pages의 브랜치 /docs 방식을 원한다면 dist 내부를 docs에 복사한 뒤 Pages를 설정할 수 있다.
현재 ChatGPT Sites 테스트 주소의 수정 권한은 별도다. 이 패키지는 인증정보/내부 Git 저장소/임시 토큰을 포함하지 않는다.
공개 사이트 상태는 그대로 유지했으며, 이번 인계는 배포를 변경하지 않았다.
