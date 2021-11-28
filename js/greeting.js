const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

const HIDDEN_KEY = "hidden";
const USER_KEY = "user";
const userName = localStorage.getItem(USER_KEY);

function login(event) {
  event.preventDefault();
  const loginName = loginInput.value;

  loginInput.value = "";
  displayName(loginName);
  localStorage.setItem(USER_KEY, loginName);
}

function displayName(user) {
  greeting.innerText = `안녕하세요, ${user}`;
  greeting.classList.remove(HIDDEN_KEY);
  loginForm.classList.add(HIDDEN_KEY);
}

if (userName !== null) {
  displayName(userName);
}

loginForm.addEventListener("submit", login);
