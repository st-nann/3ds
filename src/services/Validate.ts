import _ from "lodash";

export function validateEmail (email: string): boolean {
  const regExp = new RegExp("^([A-Za-z0-9-_.]{1,})@[A-Za-z0-9-_.]{1,}\\.[A-Za-z0-9]{1,}$");
  return regExp.test(email) || email === "";
}

export function validPassword (password: string): boolean {
  const regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
  return regExp.test(password);
}

export function validateName (name: string): boolean {
  const regExp = new RegExp("^[-\\w]+$");
  return regExp.test(name);
}

export function validateNumber (integer: string): boolean {
  const regExp = new RegExp("^[0-9]+$");
  return regExp.test(integer);
}
