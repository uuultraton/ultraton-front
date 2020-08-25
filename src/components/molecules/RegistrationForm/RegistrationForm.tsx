import React, {  useEffect, useState } from 'react';
import './RegistrationForm.scss';
import { Button, Container, TextField } from '@material-ui/core';
import validateFirstCredentialField from '../../../helpers/validateFirstCredentialField';
import validatePassword from '../../../helpers/validatePassword';
import validateEmail from '../../../helpers/validateEmail';
import axios from 'axios';


const RegistrationForm = (): JSX.Element => {
  const [firstName, changeFirstName] = useState('');
  const [lastName, changeLastName] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [isFormValidated, changeFormValidationState] = useState(false);

  const handleSubmit = () => {
    const validatedFirstName = validateFirstCredentialField(firstName);
    if (!validatedFirstName) {
      return changeFormValidationState(false);
    }

    const validateLastName = validateFirstCredentialField(lastName);
    if (!validateLastName) {
      return changeFormValidationState(false);
    }

    const validatedPassword = validatePassword(password);
    if (!validatedPassword) {
      return changeFormValidationState(false);
    }

    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      return changeFormValidationState(false);
    }
     changeFormValidationState(true);
  };

  useEffect(() => {
if(isFormValidated) {
  axios.post()
}

  }, [isFormValidated]);
  return <Container>
    <div className="registration__inner">
      <TextField id="standard-basic" name='firstName' label="First name" required error={false} multiline
                 placeholder='John' value={firstName} onChange={(event) => changeFirstName(event.target.value)}/>
      <TextField id="standard-basic" name='lastName' label="Last name" required placeholder='Adams'
                 value={lastName} onChange={(event) => changeLastName(event.target.value)}/>
      <TextField id="standard-basic" name='password' label="Password" type="password" required
                 placeholder='somepasswoRd123' value={password} onChange={(event) => changePassword(event.target.value)}/>
      <TextField id="standard-basic" name='email' label="Email" type="email" required placeholder='youremail@gmail.com'
                 value={email} onChange={(event) => changeEmail(event.target.value)}/>
      <div className="registration__buttons">
        <Button variant="contained" color="primary" >
          Clear
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>

    </div>
  </Container>;
};

export default RegistrationForm;
