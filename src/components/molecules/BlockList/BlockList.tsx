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
import { fetchDirections } from '../../../stores/skills/skills.actions';

class BlockList extends React.Component<IBlocklistProps, IBlockListState> {
  constructor(props: IBlocklistProps) {
    super(props);
    this.state = {
      selectedBlock: '',
      isLoaded: false,
      blockWidth: 150,
    };
  }

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
    if(prevProps.isModalOpen !== this.props.isModalOpen || this.props.isUserFinishedDirection) {
      return
    }
    if (prevState === this.state ) {
      this.props.blocks.map(({ name, posLeft }: IBlock) => {
        const isMarioInBlock =
          this.props.marioJumpCord >= posLeft &&
          this.props.marioJumpCord <= posLeft + this.state.blockWidth;
        if (isMarioInBlock) {
          this.setState((prev) => ({ ...prev, selectedBlock: name }));
          console.log('prev state', prevProps)
          console.log('curr state', this.props)
          this.props.openModal();
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
        <ModalWindow
          open={this.props.isModalOpen}
          direction={this.state.selectedBlock}
        />
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
  };
};

const mapStateToProps = (store: IRootStore) => {
  return {
    isUserFinishedDirection: store.app.isUserFinishedDirection,
    blocks: store.skills.blocks,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockList);
