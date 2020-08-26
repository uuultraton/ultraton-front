import { put } from 'redux-saga/effects';
import axios from 'axios';
import { showSkills, updateDirections } from './skills.actions';

export function* fetchDirectionsWorker() {
  const data = yield axios
    .get('https://ultraton-skills-manager-back.herokuapp.com/api/skills')
    .then((res) => res.data);
  yield put(updateDirections(data));
}

export function* fetchSkillsWorker() {
  const data = yield axios
    .get('https://ultraton-skills-manager-back.herokuapp.com/api/skills')
    .then((res) => res.data);
  yield put(showSkills(data));
}
