export const passwordValidation = (password: string) => {
  const regExDigit = /^(?=.*\d)/;
  const regExLowerCase = /^(?=.*[a-z])/;
  const regExUpperCase = /^(?=.*[A-Z])/;
  const regExSpecial = /^(?=.*[@$!%*#?&])/;
  const regExMin = /^[A-Za-z\d@$!%*#?&]{6,}/;

  return regExDigit.test(password) &&
    regExLowerCase.test(password) &&
    regExUpperCase.test(password) &&
    regExSpecial.test(password) &&
    regExMin.test(password)
    ? true
    : false;
};

export const checkToken = () => {
  return localStorage.getItem("token") === null ? false : true;
};

export const getUserInfo = () => {
  const userInfo = localStorage.getItem("user");
  return userInfo !== null && JSON.parse(userInfo);
};
