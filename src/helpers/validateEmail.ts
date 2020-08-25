const validateEmail = (email: string): boolean =>
  /\S{3,}@\S{2,}\.\S{2,}/.test(email);
export default validateEmail;
