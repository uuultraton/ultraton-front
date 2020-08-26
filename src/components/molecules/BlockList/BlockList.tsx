import React from 'react';
import './BlockList.scss';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IBlocklistProps } from '../../../interfaces/i-blocklist-props';
import Block from '../../atoms/Block/Block';
import ModalWindow from '../../organisms/Modal/ModalWindow';
import { IRootStore } from '../../../interfaces/i-root-store';
import { IBlockListState } from '../../../interfaces/i-block-list-state';
import { IBlock } from '../../../interfaces/i-block';
import { openModal } from '../../../stores/appStore/app.actions';
import {
  fetchDirections,
  selectBlock,
} from '../../../stores/skillsStore/skills.actions';

class BlockList extends React.Component<IBlocklistProps, IBlockListState> {
  constructor(props: IBlocklistProps) {
    super(props);
    this.state = {
      isLoaded: false,
      blockWidth: 150,
    };
  }
calcElementsPositions = (elements:IBlock[]) => {
  return elements.map( (element:IBlock) => element.posLeft = window.innerWidth/elements.length + this.state.blockWidth  )
};
  componentDidMount(): void {
    if (!this.state.isLoaded) {
      this.props.fetchDirections();
      this.setState((prev) => ({
        ...prev,
        isLoaded: true,
      }));
    }
  }

  componentDidUpdate(
    prevProps: Readonly<IBlocklistProps>,
    prevState: Readonly<IBlockListState>,
    snapshot?: any,
  ): void {
    if (
      prevProps.isModalOpen !== this.props.isModalOpen ||
      this.props.isUserFinishedDirection
    ) {
      return;
    }
    if (!(prevProps.marioJumpCord === this.props.marioJumpCord)) {
      this.props.blocks.map(({ name, posLeft }: IBlock) => {
        const isMarioInBlock =
          this.props.marioJumpCord >= posLeft &&
          this.props.marioJumpCord <= posLeft + this.state.blockWidth;
        if (isMarioInBlock) {
          this.props.selectBlock([{ name, posLeft }]);
          setTimeout(() => this.props.openModal(), 500);
        }
        return { name, posLeft };
      });
    }
  }

  render(): JSX.Element {
    return (
      <div className="directions">
        {this.props.blocks.map((block: IBlock) => (
          <Block
            blockWidth={this.state.blockWidth}
            posLeft={block.posLeft}
            name={block.name}
            key={uuidv4()}
          />
        ))}
        <ModalWindow open={this.props.isModalOpen} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    openModal: () => {
      dispatch(openModal());
    },
    fetchDirections: () => {
      dispatch(fetchDirections());
    },
    selectBlock: (block: IBlock[]) => {
      dispatch(selectBlock(block));
    },
  };
};

const mapStateToProps = (store: IRootStore) => {
  return {
    isUserFinishedDirection: store.app.isUserFinishedDirection,
    blocks: store.skills.blocks,
    selectedBlock: store.skills.selectedBlock,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockList);
