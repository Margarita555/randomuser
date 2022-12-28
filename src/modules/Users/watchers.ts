import { takeEvery } from "redux-saga/effects";
import * as types from "./actionTypes";
import { handleFetchUsers } from "./sagas";

export function* watchUsersSaga() {
  yield takeEvery(types.USERS_FETCH_REQUESTED, handleFetchUsers);
}
