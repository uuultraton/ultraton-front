import React from 'react';
import Paper from '@material-ui/core/Paper';

import './ProfileAvatar.scss';

const ProfileAvatar: React.FC = () => {
  return (
    <Paper className="profile-avatar" elevation={3}>
      <img
        className="profile-avatar__image"
        src="http://placekitten.com/300/300"
        alt="User avatar"
      />
    </Paper>
  );
};

export default ProfileAvatar;
