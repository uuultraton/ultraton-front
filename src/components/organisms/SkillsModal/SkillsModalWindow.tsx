import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './SkillsModalWindow.scss';
import { connect, useDispatch } from 'react-redux';
import {
  finishDirectionStage,
  hideModal,
} from '../../../stores/appStore/app.actions';

const SkillsModalWindow = (): JSX.Element => {
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        left: '34%',
        top: '20%',
      },
      modal: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  );
  const classes = useStyles();

  const [checked, setChecked] = React.useState([1]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleYes = () => {
    dispatch(finishDirectionStage());
    // dispatch(fetchSkillMatrix());
    dispatch(hideModal());
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Choose cathegory in which you have skills</h2>

      <List dense className={classes.root}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <div className="simple-modal__buttons">
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes}>
          Submit
        </Button>
      </div>
    </div>
  );

  return (
    <div className={classes.modal}>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default connect(null, null)(SkillsModalWindow);
