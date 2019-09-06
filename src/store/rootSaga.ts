import { all } from 'redux-saga/effects';
import homeSaga from '../features/Home/saga';

export default function* rootSaga() {
  const sagas = [homeSaga()];
  yield all(sagas)
}
