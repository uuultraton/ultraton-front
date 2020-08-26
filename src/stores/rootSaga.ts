import { all, spawn } from 'redux-saga/effects';
import skillsSagaWatcher from './skillsStore/skils.saga.watcher';

export default function* rootSaga() {
  yield all([spawn(skillsSagaWatcher)]);
}
