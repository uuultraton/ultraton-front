import { IBlock } from './i-block';

export interface IBlockListState {
  selectedBlock: string;
  blocks: IBlock[];
  isLoaded: boolean;
  blockWidth: number;
}
