import React from 'react';
import './Block.scss';
import { IBlockProps } from '../../../interfaces/i-block-props';

const Block = ({ blockWidth, posLeft, name }: IBlockProps): JSX.Element => {
  return (
    <div
      style={{
        width: `${blockWidth}px`,
        top: '55%',
        left: posLeft,
      }}
      className="directions__item"
    >
      {name}
    </div>
  );
};

export default Block;
