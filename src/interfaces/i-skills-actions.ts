import { IAppAction } from './i-app-action';
import { IBlock } from './i-block';

export interface ISkillsActions extends IAppAction {
  payload?: IBlock[];
}
