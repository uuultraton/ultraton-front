import { SkillsTypes } from './skills.types';
import { IBlock } from '../../interfaces/i-block';
import { ISkillsActions } from '../../interfaces/i-skills-actions';

export const fetchSkillMatrix = (block:IBlock[]): ISkillsActions => {
  return { type: SkillsTypes.FETCH_SKILLS, payload: block };
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
export const selectBlock = (block: IBlock[]): ISkillsActions => {
  return { type: SkillsTypes.SELECT_BLOCK, payload: block };
};
