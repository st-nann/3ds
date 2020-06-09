const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const password = process.env.VUE_APP_BLACK_BOX_KEY__ACCOUNT_PORTAL;

export function encrypt(data: any, pass: string = password) {
  const cipher = crypto.createCipher(algorithm, pass);
  let crypted = cipher.update(JSON.stringify(data), "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}
  
export function decrypt(text: string | null, pass: string = password) {
  const decipher = crypto.createDecipher(algorithm, pass);
  let dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return JSON.parse(dec);
}

export function getToken() {
  return decrypt(localStorage.token);
}

export function checkToken() {
  if (localStorage.token) {
    try {
      const token = getToken();
      if (
        token["x-auth-token"] &&
        token["project-id"] &&
        token["black-box"] &&
        token.description &&
        token["neutron-extension"]
      ) {
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
