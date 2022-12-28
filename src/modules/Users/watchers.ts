import { takeEvery, take, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import { handleFetchUsers, handleFetchUserById } from "./sagas";

export function* watchUsersSaga() {
  yield takeEvery(types.USERS_FETCH_REQUESTED, handleFetchUsers);
}

export function* watchUserInfoSaga() {
  while (true) {
    const { payload: userId } = yield take(types.FETCH_USER_BY_ID_REQUESTED);
    yield call(handleFetchUserById, userId);
  }
}
