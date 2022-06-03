// 모듈
const express = require('express');
const app = express();
// body를 받아올 수 있게
const bodyParser = require('body-parser');

// 라우팅
const index = require("./src/routes/login/index");

// 앱 셋팅
// 뷰를 views폴더로 지정
app.set("views","./src/views");
// 모듈 추출하는 것에서 에러가 남 아예 ejs로 사용하면 에러 X
app.set("view engine","ejs");

// src/publc내의 고정 주소 사용
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식 X
app.use(bodyParser.urlencoded({extended : true}));

// 미들웨어 등록
app.use("/",index);

module.exports = app;