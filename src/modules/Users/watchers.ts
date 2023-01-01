import { takeEvery, take, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import { handleFetchUsers, handlePageUpdate } from "./sagas";

export function* watchUsersSaga() {
  while (true) {
    const { payload: pageNumber } = yield take(types.USERS_FETCH_REQUESTED);
    yield call(handleFetchUsers, pageNumber);
  }
}

export function* watchPageSaga() {
  yield takeEvery(types.PAGE_UPDATE_REQUESTED, handlePageUpdate);
}
