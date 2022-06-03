"use strict";

const $registerForm = document.querySelector("#register-form");

function registerUser(event){
    event.preventDefault();
    const req = {
        id : event.target.id.value,
        name : event.target.name.value,
        nickname : event.target.nickname.value,
        password : event.target.password.value,
    };

    if(!req.id || !req.name || !req.nickname || !req.password){
        return alert("모든 항목을 채워주세요.");
    }

    axios({
        method : "POST",
        url : "./register",
        headers : {
            "Content-Type" : "application/json"
        },
        data : JSON.stringify(req)
    })
    .then(data => data.data)
    .then(data => {
        if(data.success){
            location.href ="/login";
        }else{
            alert(data.message);
        }
    })
    .catch((err) =>{
        console.error(new Error("회원가입 중 에러 발생"));
    });
    
}

$registerForm.addEventListener('submit',registerUser);
