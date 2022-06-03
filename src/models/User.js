"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        // await은 promise를 반환하는 객체에만 사용 가능
        const {id,password} = (await UserStorage.getUserInfo(this.body.id));
        if(id){
            if(id === this.body.id && password === this.body.password){
                return {success : true};
            }
            return {
                success : false,
                message : "비밀번호가 틀렸습니다."
            };
        }
        return {success : false, message : "존재하지 않는 아이디입니다."};
    }

    async register(){
        try{
            const response = await UserStorage.addUser(this.body);
            return response;
        }catch(err){
            return {success : false, message : err};
        }
    }

}

module.exports = User;