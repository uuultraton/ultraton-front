import React, { useState } from 'react';
import './PlayToLearn.scss';
import { Container } from '@material-ui/core';
import Mario from '../../components/molecules/Mario/Mario';
import MariosRoad from '../../components/atoms/MariosRoad/MariosRoad';
import BlockList from '../../components/molecules/BlockList/BlockList';
import { useSelector } from 'react-redux';
import { IRootStore } from '../../interfaces/i-root-store';

const PlayToLearn = (): JSX.Element => {
  const [marioJumpCord, changeMarioJumpCords] = useState(100);
  const {isModalOpen} = useSelector((store:IRootStore) => store.app);
  return (
    <Container>
      <BlockList marioJumpCord={marioJumpCord} isModalOpen={isModalOpen}/>
      <Mario changeMarioJumpCords={changeMarioJumpCords} />
      <MariosRoad />
    </Container>
  );
};

export default PlayToLearn;
