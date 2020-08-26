import { ISkill } from './i-skill';

export interface ISkillResponse {
  message: string;
  payload: ISkill[];
  status: number;
  success: boolean;
}
