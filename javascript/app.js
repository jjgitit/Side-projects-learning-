const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector('#greeting');

function loginBtnClick(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add("hidden");
  greeting.innerText = "Hello " + userName;
}

loginForm.addEventListener("submit", loginBtnClick);
