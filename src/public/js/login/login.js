"use strict";

const $loginForm = document.querySelector("#LoginEvent");

function loginUser(event){
    event.preventDefault();
    const req = {
        id : event.target.name.value,
        password : event.target.passwd.value
    };

    axios({
        method : "POST",
        url : "./login",
        headers : {
            "Content-Type" : "application/json"
        },
        data : JSON.stringify(req)
    })
    // axios는 결과값을 JSON으로 변환해줌
    .then(data => data.data)
    .then(data => {
        if(data.success){
            location.href ="/main";
        }else{
            alert(data.message);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인 중 에러 발생"));
    });
    
}

// ejs에서 document의 id를 가져오기전에 먼저 실행되서 null이 출력됨
// console.log($loginForm);
$loginForm.addEventListener('submit',loginUser);
