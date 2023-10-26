# 프론트엔드 스쿨 플러스: 자바스크립트 프로그래밍
* GitHub URL: https://github.com/uzoolove/FESP01-javascript

## 개발환경 구축
### 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
1. Nodejs 설치: https://nodejs.org/en/download
2. Visual Studio Code 설치: https://code.visualstudio.com/download
3. Git 설치: https://git-scm.com/downloads

### Visual Studio Code 설정
1. VSCode 실행
2. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* "Files: Readonly Include"
		- Add Pattern > workspace-ins/** 입력한 후 OK 선택
		- Add Pattern > sample/** 입력한 후 OK 선택
		- Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
3. Github 레퍼지토리 복사
	* View > Source Control > Clone Repository 선택
	* <nohyper>https</nohyper>://github.com/uzoolove/FESP01-javascript.git 입력
	* 복사할 적당한 폴더 선택 후 Select as Repository Destination 선택
	* Open 선택

## 샘플 코드 복사
* 프로젝트 내에 workspace 폴더 생성
* sample/day1 폴더 내부의 파일과 폴더를 workspace 폴더에 복사
* sample/day2 폴더 내부의 파일과 폴더를 workspace 폴더에 복사(index.html 먼저 삭제)
* 수업중 작성된 강사의 완성된 코드는 workspace-ins 폴더에서 확인

## 서버 테스트
* VS Code 터미널에서 workspace 폴더로 이동 후 실행
```
npx serve .
```
* http://localhost:3000 접속
  - 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 접속

## 소스코드 공유
* 본인의 소스코드를 강사에게 공유하고 싶을때
* StackBlitz: https://stackblitz.com 접속 후 문제 있는 소스코드 붙여넣기

