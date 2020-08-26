import { IAppStore } from '../../interfaces/i-app-store';
import { IAppReducerProps } from '../../interfaces/i-app-reducer-props';
import { AppTypes } from './app.types';

const initialState = {
  isModalOpen: false,
  isUserFinishedDirection: false,
  isErrorSnackBarOpen: false,
  errorMessage: '',
};

const appReducer = (
  state = initialState,
  { type, payload }: IAppReducerProps,
): IAppStore => {
  switch (type) {
    case AppTypes.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case AppTypes.HIDE_MODAL: {
      return { ...state, isModalOpen: false };
    }
    case AppTypes.FINISH_DIRECTION:
      return { ...state, isUserFinishedDirection: true };
    case AppTypes.SHOW_SNACKBAR_ERROR:
      return { ...state, isErrorSnackBarOpen: true, errorMessage: payload };
    case AppTypes.HIDE_SNACKBAR_ERROR:
      return { ...state, isErrorSnackBarOpen: false };
    default:
      return { ...state };
  }
};
export default appReducer;
