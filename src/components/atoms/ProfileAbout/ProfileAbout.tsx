import React from 'react';
import Paper from '@material-ui/core/Paper';

import './ProfileAbout.scss';

const ProfileAbout: React.FC = () => {
  return (
    <div>
      <Paper className="profile-about" elevation={3}>
        <span className="profile-about__name">John Smith</span>
        <p className="profile-about__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          voluptatibus minus explicabo nam repellat quasi soluta asperiores
          fuga, eum reprehenderit beatae corporis, animi quos corrupti veniam
          neque in natus quibusdam tempora esse molestias saepe! Eligendi
          reiciendis quod itaque veritatis laborum ipsam, consequuntur quia!
          Reprehenderit dignissimos beatae vel illum quibusdam, harum architecto
          illo quasi dolorem laborum. Recusandae adipisci voluptate placeat,
          beatae quia eos corrupti soluta non, nostrum unde aut!
        </p>
      </Paper>
    </div>
  );
};

export default ProfileAbout;
