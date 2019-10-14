
# BackEnd Setup

## Dependencies
* express@4.17.1
* sequelize@5.17.1
* mysql2@1.7.0
* sequelize-cli@5.5.0
* cors@2.8.5
* bcrypt@3.0.6
* passport-local@1.0.0
* passport@0.4.0
* express-session@1.16.2
* cookie-parser@1.4.4
* morgan@1.9.1
* multer@1.4.2
***

```bash
mkdir back

cd vue-nodebird/back

npm init 
```

## Express
[Express](http://expressjs.com/) is a minimal and flexible Node.js web application framework.

Install express
```bash
npm i express
```

Add dev scripts in ```package.json``` file and create a ```app.js``` file.
* back/app.js

## Run Server
```bash
npm run dev # node app.js
```

## Sequelize
Sequelize is a promise-based Node.js ORM for **MySQL**.


Installation
```bash
npm i sequelize mysql2 # sequelize module 
npm i -D sequelize-cli  

npx sequelize init # created models, migrations, seeders folder in your back directory.
```

## Nodemon
Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Installation
```bash
npm i -D nodemon
```

npx sequelize db:create # Database vue-nodebird created.

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
npm i cors

bcrypt is a secured way to store passwords in my database
npm i bcrypt

npm i passport passport-local
mkdir passport # 사용자 인증을 위한 미들웨어
npm i express-session
npm i cookie-parser
npm i morgan # 클라이언트의 요청 로그를 확인하는 미들웨어


Router 객체로 라우팅 분리하기
mkdir routes


```bash
# 파일 업로드를 위한 미들웨어
npm i multer // Multer는 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어

mkidr uploads # 
```