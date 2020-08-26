import { put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { showSkills, updateDirections } from './skills.actions';
import { showErrorSnackBar } from '../appStore/app.actions';
import { ISkillsActions } from '../../interfaces/i-skills-actions';
import { ISkillResponse } from '../../interfaces/i-skill-response';
import { IDirectionsResponse } from '../../interfaces/i-directions-response';
import calcElementsPositions from '../../helpers/calcElementsPositionHelper';
import toBlockEntity from '../../helpers/toBlockEntityHelper';

export function* fetchDirectionsWorker() {
  const data = yield axios
    .get(
      'https://ultraton-skills-manager-back.herokuapp.com/api/skills/directions',
    )
    .then((res: AxiosResponse<IDirectionsResponse>) => {
      return calcElementsPositions(res.data.payload);
    })
    .catch((error) => put(showErrorSnackBar(error.message)));
  yield put(updateDirections(data));
}

export function* fetchSkillsWorker(action: ISkillsActions) {
  // @ts-ignore
  const { name } = action.payload[0];
  const data = yield axios
    .get(
      `https://ultraton-skills-manager-back.herokuapp.com/api/skills`, {params: name}
    )
    .then((res: AxiosResponse<ISkillResponse>) => { return toBlockEntity(res.data.payload)})
    .catch((error) => put(showErrorSnackBar(error.message)));
  yield put(showSkills(data));
}


