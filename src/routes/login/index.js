// strcit 문법을 유지하겠다.
"use strict";

const express = require('express');
// 라우터를 설정
const router = express.Router();
const ctrl = require("./login.ctrl");

// 이 도메인으로 들어왔을때 요청을 분리
// MVC 패턴으로
router.get('/', ctrl.output.login);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

router.get('/main', ctrl.output.main);

router.get('/register', ctrl.output.register);
router.post('/register', ctrl.process.register);

module.exports = router;