import { IBlock } from './i-block';

export interface IDirectionsResponse {
  success: boolean;
  payload: string[],
  status: number,
  message: string
}
