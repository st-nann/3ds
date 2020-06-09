import _ from "lodash";

export function validateEmail (email: string): boolean {
  const regExp = new RegExp("^([A-Za-z0-9-_.]{1,})@[A-Za-z0-9-_.]{1,}\\.[A-Za-z0-9]{1,}$");
  return regExp.test(email) || email === "";
}

export function validPassword (password: string): number[] {
  const options: number[] = [];
  const regUpper = new RegExp("[A-Z]");
  const regLower = new RegExp("[a-z]");
  const regNum = new RegExp("[0-9]");
  const regSpecial = new RegExp("^([@!*.\\-_\\w]*)([@!*.\\-_\\s]+)([@!*.\\-_\\w]*)$");
  if (_.size(password) >= 8) { options.push(1); }
  if (regLower.test(password)) { options.push(2); }
  if (regUpper.test(password)) { options.push(3); }
  if (regNum.test(password)) { options.push(4); }
  if (regSpecial.test(password)) { options.push(5); }
  return options;
}

export function validateName (name: string): string | boolean {
  const regExp = new RegExp("^[-\\w]+$");
  return regExp.test(name);
}
