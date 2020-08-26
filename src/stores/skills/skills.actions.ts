import { SkillsTypes } from './skills.types';
import { IBlock } from '../../interfaces/i-block';
import { ISkillsActions } from '../../interfaces/i-skills-actions';

export const fetchSkillMatrix = (): ISkillsActions => {
  return { type: SkillsTypes.FETCH_SKILLS };
};
export const fetchDirections = (): ISkillsActions => {
  return { type: SkillsTypes.FETCH_DIRECTIONS };
};
export const updateDirections = (data: IBlock[]): ISkillsActions => {
  return { type: SkillsTypes.UPDATE_DIRECTIONS, payload: data };
};
export const showSkills = (data: IBlock[]): ISkillsActions => {
  return { type: SkillsTypes.SHOW_SKILLS, payload: data };
};
