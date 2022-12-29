import { takeEvery } from "redux-saga/effects";
import * as types from "./actionTypes";
import { handleLogin, handleLogout } from "./sagas";

export function* watchLoginSaga() {
  yield takeEvery(types.LOGIN_REQUESTED, handleLogin);
}

export function* watchLogoutSaga() {
  yield takeEvery(types.LOGOUT_REQUESTED, handleLogout);
}
