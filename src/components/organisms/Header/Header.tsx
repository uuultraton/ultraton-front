import React, { useState, useEffect, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { LoginContext } from '../../../stores/loginStore/reducer';
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
    icon: {
      fill: ' #FE6B8B ',
      width: '30px',
      height: '30px',
    },
  }),
);

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [clicksPerStep, setClicksPerStep] = useState(false);

  const { dispatchClicksLogin } = useContext(LoginContext);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHome = () => {
    history.push('/');
    handleClose();
  };

  const handleProfile = () => {
    history.push('/profile');
    handleClose();
  };

  const handlePlay = () => {
    history.push('/play_to_learn');
    handleClose();
  };

  const handleLogout = () => {
    dispatchClicksLogin({ type: 'login' });

    localStorage.removeItem('jwt_token');
    setClicksPerStep(false);
    console.log('handleLogout', clicksPerStep);
    history.push('/');
    handleClose();
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
      setClicksPerStep(true);
    }
  }, []);

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
          {!clicksPerStep ? (
            <>
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
            </>
          ) : (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <AccountCircle className={classes.icon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleHome}>Home</MenuItem>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handlePlay}>Play</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
