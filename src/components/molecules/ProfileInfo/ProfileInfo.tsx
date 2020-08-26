import React from 'react';

import ProfileAvatar from '../../atoms/ProfileAvatar/ProfileAvatar';
import ProfileAbout from '../../atoms/ProfileAbout/ProfileAbout';

const ProfileInfo: React.FC = () => {
  return (
    <div>
      <ProfileAvatar />
      <ProfileAbout />
    </div>
  );
};

export default ProfileInfo;
