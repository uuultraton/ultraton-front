import React from 'react';

import User from '../../components/templates/User/User';

import './ProfilePage.scss';
import { Alert } from '@material-ui/lab';
import { hideErrorSnackBar } from '../../stores/appStore/app.actions';
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IRootStore } from '../../interfaces/i-root-store';

function ProfilePage() {
  const { isErrorSnackBarOpen } = useSelector((store: IRootStore) => store.app);
  const dispatch = useDispatch();
  return (
    <div className="profile-page">
      <User />
      <Snackbar
        open={isErrorSnackBarOpen}
        autoHideDuration={3000}
      >
        <Alert severity="error" onClose={() => {
          dispatch(hideErrorSnackBar());
        }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProfilePage;
