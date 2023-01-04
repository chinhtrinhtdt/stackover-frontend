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
