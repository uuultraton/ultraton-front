import { IBlock } from './i-block';

export interface IBlocklistProps {
  marioJumpCord: number;
  isModalOpen: boolean;
  openModal: () => void;
  fetchDirections: () => void;
  selectBlock: (block:IBlock[]) => void;
  selectedBlock: IBlock[];
  blocks: IBlock[];
  isUserFinishedDirection: boolean
}
