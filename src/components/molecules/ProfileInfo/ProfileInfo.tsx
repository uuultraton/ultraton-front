import React from 'react';

import ProfileAvatar from '../../atoms/ProfileAvatar/ProfileAvatar';
import ProfileAbout from '../../atoms/ProfileAbout/ProfileAbout';

import './ProfileInfo.scss';

const ProfileInfo: React.FC = () => {
  return (
    <div className="profile-info">
      <ProfileAvatar />
      <ProfileAbout />
    </div>
  );
};

export default ProfileInfo;
