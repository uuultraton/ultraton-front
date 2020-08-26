import IAction from './i-action';

export interface IAppAction extends IAction{
  type: string;
  payload?: string;
}
