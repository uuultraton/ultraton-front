import React, { ChangeEvent, useEffect, useState } from 'react';
import './RegistrationForm.scss';
import { Button, Container, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import validateFirstCredentialField from '../../../helpers/validateFirstCredentialField';
import validatePassword from '../../../helpers/validatePassword';
import validateEmail from '../../../helpers/validateEmail';

import API from '../../../helpers/api';
import IRegistrationResponse from '../../../interfaces/i-registrationResponce';

const RegistrationForm = (): JSX.Element => {
  const [firstName, changeFirstName] = useState('');
  const [lastName, changeLastName] = useState('');
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [alertFirstName, toggleAlertFirstName] = useState(false);
  const [alertLastName, toggleAlertLastName] = useState(false);
  const [alertEmail, toggleAlertEmail] = useState(false);
  const [alertPassword, toggleAlertPassword] = useState(false);
  const [errorAlert, toggleErrorAlert] = useState(false);
  const [errorMessage, changeErrorMessage] = useState(
    'Registration was failed',
  );
  const [loggedIn, toggleLogin] = useState(false);
  const clearForm = (): void => {
    changeFirstName('');
    changeLastName('');
    changeEmail('');
    changePassword('');
    changePassword('');
    changeErrorMessage('');
    toggleAlertFirstName(false);
    toggleAlertLastName(false);
    toggleAlertPassword(false);
    toggleAlertEmail(false);
    toggleErrorAlert(false);
  };
  const validateForm = (): boolean => {
    const validatedFirstName = validateFirstCredentialField(firstName);
    if (!validatedFirstName) {
      toggleAlertFirstName(true);
      return false;
    }
    toggleAlertFirstName(false);

    const validateLastName = validateFirstCredentialField(lastName);
    if (!validateLastName) {
      toggleAlertLastName(true);
      return false;
    }
    toggleAlertLastName(false);

    const validatedPassword = validatePassword(password);
    if (!validatedPassword) {
      toggleAlertPassword(false);
      return false;
    }
    toggleAlertPassword(false);

    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      toggleAlertEmail(false);
      return false;
    }
    toggleAlertEmail(false);
    return true
  };

  const handleClick = () => {
   const validated = validateForm();
    if(validated) {
      API.post('auth/signup', { firstName, lastName, email, password }).then(
        ({ data }: AxiosResponse<IRegistrationResponse>) => {
          if (!data.success) {
            changeErrorMessage(data.message);
            toggleErrorAlert(true);
          } else {
            toggleErrorAlert(false);
            toggleLogin(true);
          }
        },
      );
    }
  };

  if (loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <Container>
      <div className="registration__inner">
        <TextField
          name="firstName"
          label="First name"
          required
          multiline
          error={alertFirstName}
          helperText={alertFirstName && 'Not valid First name'}
          placeholder="John"
          value={firstName}
          onChange={(
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
          ) => changeFirstName(event.target.value)}
        />
        <TextField
          name="lastName"
          label="Last name"
          required
          placeholder="Adams"
          error={alertLastName}
          helperText={alertLastName && 'Not valid Last name'}
          value={lastName}
          onChange={(
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
          ) => changeLastName(event.target.value)}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          placeholder="somepasswoRd123"
          value={password}
          error={alertPassword}
          helperText={alertPassword && 'Not valid Password'}
          onChange={(
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
          ) => changePassword(event.target.value)}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          required
          placeholder="youremail@gmail.com"
          error={alertEmail}
          helperText={alertEmail && 'Not valid email'}
          value={email}
          onChange={(
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
          ) => changeEmail(event.target.value)}
        />
        {errorAlert && <Alert severity="error">{errorMessage}</Alert>}
        <div className="registration__buttons">
          <Button variant="contained" color="primary" onClick={clearForm}>
            Clear
          </Button>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationForm;
