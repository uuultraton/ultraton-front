import { IAppStore } from './i-app-store';
import { ISkillsStore } from './i-skills-store';

export interface IRootStore {
  app: IAppStore;
  skills: ISkillsStore;
}
