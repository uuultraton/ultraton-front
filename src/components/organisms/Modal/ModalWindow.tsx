import React from 'react';
import ReactDOM from 'react-dom';
import './ModalWindow.scss';
import Modal from '@material-ui/core/Modal';
import { Button, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { IModalWindowProps } from '../../../interfaces/i-modal-window-props';
import {
  finishDirectionStage,
  hideModal,
} from '../../../stores/appStore/app.actions';
import { fetchSkillMatrix } from '../../../stores/skillsStore/skills.actions';
import { IRootStore } from '../../../interfaces/i-root-store';

const ModalWindow = ({ open }: IModalWindowProps): JSX.Element => {
  const rootPortal: HTMLElement = document.getElementById(
    'portal-root',
  ) as HTMLElement;
  const dispatch = useDispatch();
const {selectedBlock} = useSelector((store:IRootStore)=> store.skills);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        padding: theme.spacing(2, 4, 3),
        left: '35%',
        top: '20%',
      },
    }),
  );
  const classes = useStyles();

  const handleYes = () => {
    dispatch(finishDirectionStage());
    dispatch(fetchSkillMatrix(selectedBlock));
    dispatch(hideModal());
  };
  return ReactDOM.createPortal(
    <Modal
      open={open}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">Direction was chosen!</h2>
       {selectedBlock[0] && <p id="simple-modal-description">
          Are you sure, that you want to learn {selectedBlock[0].name}  direction?
        </p>}
        <div className="simple-modal__buttons">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(hideModal());
            }}
          >
            No
          </Button>
          <Button variant="contained" color="primary" onClick={handleYes}>
            Yes
          </Button>
        </div>
      </div>
    </Modal>,
    rootPortal,
  );
};

export default connect(null, null)(ModalWindow);
