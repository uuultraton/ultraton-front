import { AppTypes } from './app.types';
import { IAppAction } from '../../interfaces/i-app-action';

export const openModal = (): IAppAction => {
  return { type: AppTypes.OPEN_MODAL };
};
export const hideModal = (): IAppAction => {
  return { type: AppTypes.HIDE_MODAL };
};
export const finishDirectionStage = (): IAppAction => {
  return {type: AppTypes.FINISH_DIRECTION}
};
