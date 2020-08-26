import React, { useState } from 'react';
import './PlayToLearn.scss';
import { Container, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import Mario from '../../components/molecules/Mario/Mario';
import MariosRoad from '../../components/atoms/MariosRoad/MariosRoad';
import BlockList from '../../components/molecules/BlockList/BlockList';

import { IRootStore } from '../../interfaces/i-root-store';
import { hideErrorSnackBar } from '../../stores/appStore/app.actions';

const PlayToLearn = (): JSX.Element => {
  const [marioJumpCord, changeMarioJumpCords] = useState(100);
  const { isModalOpen } = useSelector((store: IRootStore) => store.app);
  const { isErrorSnackBarOpen } = useSelector((store: IRootStore) => store.app);
  const dispatch = useDispatch();
  return (
    <Container className="game-wrapper">
      <BlockList marioJumpCord={marioJumpCord} isModalOpen={isModalOpen} />
      <Mario changeMarioJumpCords={changeMarioJumpCords} />
      <MariosRoad />
      <Snackbar open={isErrorSnackBarOpen} autoHideDuration={3000}>
        <Alert
          severity="error"
          onClose={() => {
            dispatch(hideErrorSnackBar());
          }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PlayToLearn;
