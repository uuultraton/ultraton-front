import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import ThemeSwitcher from '../../atoms/ThemeSwitcher/ThemeSwitcher';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 20px',
      margin: '0 10px',
    },
  }),
);

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="transparent">
        <Toolbar>
          <ThemeSwitcher />
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            {/* Ultraton */}
          </Typography>
          <Button
            className={classes.button}
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
          <Button
            className={classes.button}
            onClick={() => history.push('/register')}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
