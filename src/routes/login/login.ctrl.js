"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
    login : (req, res) => {
        // 이 부분이 컨트롤러
        res.render("home/login")
    },
    main : (req,res) =>{
        res.render("home/main")
    },
    register : (req, res) =>{
        res.render("home/register")
    }
};

const process = {
    login : async (req,res) =>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register : async (req,res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

// login을 모듈로 밖으로 뺌
module.exports = {
    output,
    process,
};