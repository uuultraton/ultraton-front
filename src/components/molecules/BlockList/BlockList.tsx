import React from 'react';
import './BlockList.scss';
import {
  connect,
  MapDispatchToPropsParam,
} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IBlocklistProps } from '../../../interfaces/i-blocklist-props';
import Block from '../../atoms/Block/Block';
import ModalWindow from '../../organisms/Modal/ModalWindow';
import { IRootStore } from '../../../interfaces/i-root-store';
import axios from 'axios';
import { IBlockListState } from '../../../interfaces/i-block-list-state';
import { IBlock } from '../../../interfaces/i-block';
import { Action } from 'redux';
import { openModal } from '../../../stores/appStore/app.actions';

class BlockList extends React.Component<IBlocklistProps, IBlockListState> {
  constructor(props: IBlocklistProps) {
    super(props);
    this.state = {
      selectedBlock: '',
      blocks: [],
      isLoaded: false,
      blockWidth: 150,
    };
  }

  componentDidMount(): void {
    if (!this.state.isLoaded) {
      axios
        .get('https://ultraton-skills-manager-back.herokuapp.com/api/skills')
        .then((res) => {
          this.setState((prev) => ({
            ...prev,
            blocks: res.data,
            isLoaded: true,
          }));
        });
    }
  }

  componentDidUpdate(
    prevProps: Readonly<IBlocklistProps>,
    prevState: Readonly<IBlockListState>,
    snapshot?: any,
  ): void {
    if(prevState === this.state) {
      this.state.blocks.map(({ name, posLeft }: IBlock) => {
        const isMarioInBlock =
          this.props.marioJumpCord >= posLeft &&
          this.props.marioJumpCord <= posLeft + this.state.blockWidth;
        if (isMarioInBlock) {
          this.setState((prev) => ({ ...prev, selectedBlock: name }));
          this.props.openModal()
        }
        return { name, posLeft };
      });
    }

  }
  render(): JSX.Element {
    return (
      <div className="directions">
        {this.state.blocks.map((block: { posLeft: number; name: string }) => (
          <Block
            blockWidth={this.state.blockWidth}
            posLeft={block.posLeft}
            name={block.name}
            key={uuidv4()}
          />
        ))}
        <ModalWindow
          open={this.props.isModalOpen}
          direction={this.state.selectedBlock}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return ({
    openModal: () => {dispatch(openModal())}
  })
};

export default connect(null, mapDispatchToProps)(BlockList);
