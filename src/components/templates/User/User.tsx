import React from 'react';

import Profile from '../../organisms/Profile/Profile';
import Skills from '../../organisms/Skills/Skills';

import './User.scss';

const User: React.FC = () => {
  return (
    <div className="user">
      <Profile />
      <Skills />
    </div>
  );
};

export default User;
