import React from 'react';
import './Block.scss';
import { IBlockProps } from '../../../interfaces/i-block-props';

const Block = ({ blockWidth, posLeft, name }: IBlockProps): JSX.Element => {
  return (
    <div
      style={{
        width: `${blockWidth}px`,
        top: '47%',
        left: posLeft,
        backgroundColor: '#fff',
      }}
      className="directions__item"
    >
      {name}
    </div>
  );
};

export default Block;
