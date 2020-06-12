
export function getToken() {
  return localStorage.token;
}

export function checkToken() {
  if (localStorage.token) {
    try {
      const token = getToken();
      if (token["x-auth-token"]) {
        return token;
      }
    } catch (e) {
      clearToken();
    }
  }
  return false;
}

export function clearToken() {
  const param = localStorage.param;
  window.localStorage.clear();
  window.localStorage.param = param;
  window.location.href = "/";
}
