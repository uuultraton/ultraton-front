import { IBlock } from './i-block';

export interface IBlocklistProps {
  marioJumpCord: number;
  isModalOpen: boolean;
  openModal: () => void;
  fetchDirections: () => void;
  blocks: IBlock[];
  isUserFinishedDirection: boolean
}
