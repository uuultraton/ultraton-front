import { combineReducers } from 'redux';
import appReducer from './appStore/app.reducer';
import skillsReducer from './skillsStore/skills.reducer';

const rootReducer = combineReducers({
  app: appReducer,
  skills: skillsReducer,
});

export default rootReducer;
