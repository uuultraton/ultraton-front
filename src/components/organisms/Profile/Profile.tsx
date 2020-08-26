import React from 'react';

import ProfileInfo from '../../molecules/ProfileInfo/ProfileInfo';

import './Profile.scss';

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <ProfileInfo />
    </div>
  );
};

export default Profile;
