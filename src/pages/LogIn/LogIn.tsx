import React, { ChangeEvent, useEffect, useState } from 'react';
import './LogIn.scss';
import { Button, Container, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import validatePassword from '../../helpers/validatePassword';
import validateEmail from '../../helpers/validateEmail';
import API from '../../helpers/api';

import IRegistrationResponse from '../../interfaces/i-registrationResponce';

const LogIn = (): JSX.Element => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');
  const [isFormValidated, changeFormValidationState] = useState(false);

  const [alertEmail, toggleAlertEmail] = useState(false);
  const [alertPassword, toggleAlertPassword] = useState(false);
  const [errorAlert, toggleErrorAlert] = useState(false);

  const [routeRedirect, setRouteRedirect] = useState(false);

  const handleSubmit = (): void => {
    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      toggleAlertEmail(true);
      return changeFormValidationState(false);
    }
    toggleAlertEmail(false);

    const validatedPassword = validatePassword(password);
    if (!validatedPassword) {
      toggleAlertPassword(true);
      return changeFormValidationState(false);
    }
    toggleAlertPassword(false);

    changeFormValidationState(true);

    const resJson: any = API.post('auth/login', { password, email }).then(
      (res: AxiosResponse<IRegistrationResponse>) => {
        if (!res.data) {
          return toggleErrorAlert(true);
        }
        toggleErrorAlert(false);
        return res.data;
      },
    );

    resJson.then((defs: any) => {
      if (defs.status === 200) {
        localStorage.setItem('jwt_token', defs.payload.jwt_token);
        setRouteRedirect(true);
      }
    });
  };

  useEffect(() => {
    if (isFormValidated) {
      const jwtToken = localStorage.getItem('jwt_token');
      setRouteRedirect(!!jwtToken);
    }
  }, [isFormValidated]);

  if (routeRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <div className="login__inner">
        <TextField
          id="standard-basic"
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
        <TextField
          id="standard-basic"
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
        {errorAlert && <Alert severity="error">Log In failed!</Alert>}
        <div className="login__buttons">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Log in
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
