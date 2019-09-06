import { all, fork, take, call, put } from 'redux-saga/effects';
import { ClientVersionForm } from "../../models/Bo/HomeBo";
import { fetchClientVersionService } from "../../services/homeService";

import {
  fetchClientVersion,
} from './action';
import { FETCH_CLIENT_VERSION_REQUEST_INTERNET } from './constants';

function* watchFetchClientVersion() {
  while (true) {
    try {
      yield take(FETCH_CLIENT_VERSION_REQUEST_INTERNET);
      const versionInfo: ClientVersionForm = yield call(fetchClientVersionService);
      yield put(fetchClientVersion(versionInfo));
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* homeSaga() {
  yield all([fork(watchFetchClientVersion)]);
}
