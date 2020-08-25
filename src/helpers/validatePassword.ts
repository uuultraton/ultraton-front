const validatePassword = (password: string): boolean => {
  return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/).test(password);
};

export default validatePassword;
