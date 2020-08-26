import React, { useEffect, useState } from 'react';
import './BlockList.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IBlocklistProps } from '../../../interfaces/i-blocklist-props';
import Block from '../../atoms/Block/Block';
import ModalWindow from '../../organisms/Modal/ModalWindow';
import { openModal } from '../../../stores/appStore/app.actions';
import { IRootStore } from '../../../interfaces/i-root-store';

const BlockList = ({ marioJumpCord }: IBlocklistProps): JSX.Element => {
  const [selectedBlock, changeSelectedBlock] = useState('');
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store: IRootStore) => store.app);
  const blocks = [
    { name: 'FE', posLeft: 300 },
    { name: 'Java', posLeft: 600 },
    { name: 'QA', posLeft: 900 },
  ];
  const blockWidth = 150;
  useEffect(() => {
    blocks.map((block) => {
      const isMarioInBlock =
        marioJumpCord >= block.posLeft &&
        marioJumpCord <= block.posLeft + blockWidth;
      if (isMarioInBlock) {
        setTimeout(() => {
          changeSelectedBlock(block.name);
          dispatch(openModal());
        }, 500);
      }
      return block;
    });
  }, [marioJumpCord, selectedBlock, blocks]);
  return (
    <div className="directions">
      {blocks.map((block) => (
        <Block
          blockWidth={blockWidth}
          posLeft={block.posLeft}
          name={block.name}
          key={uuidv4()}
        />
      ))}
      <ModalWindow
        open={isModalOpen}
        direction={selectedBlock}
        changeSelectedBlock={changeSelectedBlock}
      />
    </div>
  );
};

export default connect(null, null)(BlockList);
