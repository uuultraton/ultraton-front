import { IBlock } from './i-block';
import IAction from './i-action';

export interface ISkillsActions extends IAction {
  payload?: IBlock[];
}
