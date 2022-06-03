
function loginUser(event){
    event.preventDefault();
    // const name = event.target
    console.log(event.target.name.value)
    console.log(event.target.passwd.value)
    document.location.href='http://localhost:3100/main_copy.html'
}

const $loginForm = document.querySelector("#LoginEvent");
$loginForm.addEventListener('submit',loginUser);
