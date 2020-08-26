const validateFirstCredentialField = (firstName: string): boolean => {
  return firstName.length >= 2 && !firstName.match(/\W/);
};

export default validateFirstCredentialField;
