import { ISkillsReducer } from '../../interfaces/i-skills-reducer';
import { ISkillsStore } from '../../interfaces/i-skills-store';
import { SkillsTypes } from './skills.types';

const initialState = {
  blocks: [],
  selectedBlock: []
};

const skillsReducer = (
  state = initialState,
  { type, payload }: ISkillsReducer,
): ISkillsStore => {
  switch (type) {
    case SkillsTypes.UPDATE_DIRECTIONS:
      return { ...state, blocks: payload };
    case SkillsTypes.SHOW_SKILLS:
      return { ...state, blocks: payload };
    case SkillsTypes.SELECT_BLOCK:
      return {...state, selectedBlock: payload}
    default:
      return { ...state };
  }
};

export default skillsReducer;
