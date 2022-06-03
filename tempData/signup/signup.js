
function loginUser(event){
    event.preventDefault();
    // const name = event.target
    console.log(event.target.name.value)
    console.log(event.target.passwd.value)
    console.log(event.target.nickname.value)
    console.log(event.target.email.value)
    document.location.href='../login/login.html'
}

const $loginForm = document.querySelector("#SingupEvent");
$loginForm.addEventListener('submit',loginUser);

