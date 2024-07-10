const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const quoteBlock = document.querySelector("#quote");
const mainBodyBlock = document.querySelector(".main-body");
const weatherBlock = document.querySelector("#weather");


const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  quoteBlock.classList.remove(HIDDEN_CLASSNAME);
  mainBodyBlock.classList.remove(HIDDEN_CLASSNAME);
  weatherBlock.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
