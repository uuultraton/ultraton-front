import { IAppStore } from '../../interfaces/i-app-store';
import { IAppReducerProps } from '../../interfaces/i-app-reducer-props';
import { AppTypes } from './app.types';

const initialState = {
  isModalOpen: false,
};

const appReducer = (
  state = initialState,
  { type }: IAppReducerProps,
): IAppStore => {
  switch (type) {
    case AppTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case AppTypes.HIDE_MODAL: {
      return { ...state, isModalOpen: false };
    }
    default:
      return { ...state };
  }
};
export default appReducer;
