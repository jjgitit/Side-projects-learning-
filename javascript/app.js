const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function loginBtnClick() {
  const userName = loginInput.value;
  if (userName === "") {
    alert('please enter your name');
  }
  else if (userName.length > 15){
    alert('your name is too long');
  }
}

loginButton.addEventListener("click", loginBtnClick);
