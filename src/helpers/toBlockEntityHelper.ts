import { ISkill } from '../interfaces/i-skill';

const toBlockEntity = (enteties: ISkill[]) => {
  return enteties.map((entetie, i) => ({
    name: entetie.name,
    posLeft: window.innerWidth / enteties.length + 150 * (i + 1),
  }));
};
export default toBlockEntity;
