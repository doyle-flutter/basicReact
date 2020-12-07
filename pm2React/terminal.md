## React - ClientServer 를 설치하여 사용
  
0. Node.js 설치(npm 같이 설치됩니다)
1. React 프로젝트 설치
 > npx create-react-app [project-name]
2. 프로젝트로 이동
 > cd [project-name]
3. Test 
  > npm start
4. PM2 및 Serve 설치
 > npm i -g pm2  
 > npm i -g serve
5. PM2를 통해 React-ClientServer 실행
 > pm2 serve build <port> --spa --monitor   
  *Monitor 기능이 웹으로 제공되기 시작하는 것 같습니다, 로그인하여 화려한 PM2 모니터를 이용해보세요
