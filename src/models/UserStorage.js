"use strict";

// fs자체가 Promise를 반환함.
const fs = require("fs").promises;

class UserStorage{
    // static 으로 정적 선언해야지 외부에서 변수 및 함수 접근 가능
    // 나머지 연산자로 배열 형으로 받아옴

    // private한 함수는 #을 붙임
    static #getUserInfo(data,id){
        const users = (JSON.parse(data));
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users); // ->[id, password, name, nickname]
            const userInfo = usersKeys.reduce((newUser,info)=>{
                newUser[info] = users[info][idx];
                return newUser;
            },{});
        return userInfo;
    }
    
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        // 배열의 reduce 함수에 대해 알아보기
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field]
            }
            return newUsers;
        },{});

        return newUsers;
    }

    static getUsers(isAll,...fields){
        // 파일 Json을 불러와서 id값이 있는지 체크 후 반환
        // 없으면 undefined
        return fs.readFile("./src/databases/pcbl/users.json")
        .then( (data) => {
            return this.#getUsers(data,isAll,fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id){
        // 파일 Json을 불러와서 id값이 있는지 체크 후 반환
        // 없으면 undefined
        return fs.readFile("./src/databases/pcbl/users.json")
        .then( (data) => {
            return this.#getUserInfo(data,id);
        })
        .catch(console.error);
    }

    static async addUser(userinfo){
        const users = await this.getUsers(true);
        // console.log(users);
        // console.log(userinfo);
        if(users.id.includes(userinfo.id)){
            throw ("이미 존재하는 아이디입니다.");
        }
        users.id.push(userinfo.id);
        users.name.push(userinfo.name);
        users.nickname.push(userinfo.nickname);
        users.password.push(userinfo.password);
        fs.writeFile("./src/databases/pcbl/users.json",JSON.stringify(users));
        return {success : true};
    }

}

module.exports = UserStorage;