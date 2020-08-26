import { IReducerProps } from './i-reducer-props';
import { IBlock } from './i-block';

export interface ISkillsReducer extends IReducerProps {
  payload: IBlock[];
}
