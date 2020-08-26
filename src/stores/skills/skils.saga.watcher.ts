import { takeEvery } from 'redux-saga/effects';
import { SkillsTypes } from './skills.types';
import { fetchDirectionsWorker, fetchSkillsWorker } from './skills.saga.worker';

function* skillsSagaWatcher() {
  yield takeEvery(SkillsTypes.FETCH_DIRECTIONS, fetchDirectionsWorker);
  yield takeEvery(SkillsTypes.FETCH_SKILLS, fetchSkillsWorker);
}

export default skillsSagaWatcher;
