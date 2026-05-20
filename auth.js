const AUTH_PASSWORD = "byebye";
const AUTH_KEY = "wbqd_auth";

function checkAuth() {
  if (sessionStorage.getItem(AUTH_KEY) !== "true") {
    window.location.href = "password.html";
  }
}

function login(pw) {
  if (pw === AUTH_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}
