import _ from "lodash";

export function doValidateEmail (email: string): boolean {
  const regExp = new RegExp("^([A-Za-z0-9-_.]{1,})@[A-Za-z0-9-_.]{1,}\\.[A-Za-z0-9]{1,}$");
  return regExp.test(email) || email === "";
}

export function doValidateMacAddress (mac: string): boolean {
  const regExp = new RegExp("^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$");
  return regExp.test(mac) || mac === "";
}

export function doValidPassword (password: string): number[] {
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

export function doValidateHostname (name: string): string | boolean {
  const regExp = new RegExp("^[-\\w]+$");
  if (name === "") {
    return "Require.";
  } else if (!regExp.test(name)) {
    return "The Name must be contains Uppercase(A-Z), Lowercase(a-z), Digit(0-9), Special character (- or _)";
  } else if (_.size(name) > 20) {
    return "The Name must be less than or equal to 20 characters";
  } else if (_.size(name) < 6) {
    return "The Name must be more than or equal to 6 characters";
  } else {
    return true;
  }
}

export function doValidateName (name: string): string | boolean {
  const regExp = new RegExp("[A-Za-z0-9]+$");
  return !regExp.test(name) || _.includes(name, " ")
    ? "Value must be contains A-Z, a-z, 0-9"
    : true;
}
