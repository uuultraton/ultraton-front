import { IBlock } from '../interfaces/i-block';

const  calcElementsPositions = (elements: string[]): IBlock[] => {
  return elements.reduce((acc, value, i) => {
    const element = {
      name: value,
      posLeft: window.innerWidth / elements.length + 150 *(i+1),
    };
    acc.push(element);
    return acc;
  }, [] as IBlock[]);
};
export default calcElementsPositions;
