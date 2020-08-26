import React, { useState } from 'react';
import './PlayToLearn.scss';
import { Container } from '@material-ui/core';
import Mario from '../../components/molecules/Mario/Mario';
import MariosRoad from '../../components/atoms/MariosRoad/MariosRoad';
import BlockList from '../../components/molecules/BlockList/BlockList';

const PlayToLearn = (): JSX.Element => {
  const [marioJumpCord, changeMarioJumpCords] = useState(100);
  return (
    <Container>
      <BlockList marioJumpCord={marioJumpCord} />
      <Mario changeMarioJumpCords={changeMarioJumpCords} />
      <MariosRoad />
    </Container>
  );
};

export default PlayToLearn;
