export const validateName = (name) => {
  const regExp = /^(?=.*[a-zA-Z\s])[a-zA-Z\s]{3,}$/;
  const testName = regExp.test(name);
  return testName;
};

export const validateEmail = (email) => {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const testEmail = regExp.test(email);
  return testEmail;
};

export const validatePassword = (password) => {
  const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;

  const testPassword = regExp.test(password);
  return testPassword;
};
