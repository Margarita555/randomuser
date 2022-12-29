import { put } from "redux-saga/effects";
import * as types from "./actionTypes";

export function* handleLogin() {
  try {
    yield put({ type: types.LOGIN_SUCCEEDED, payload: true });
  } catch (e) {
    yield put({ type: types.LOGIN_FAILED, payload: e });
  }
}

export function* handleLogout() {
  try {
    yield put({ type: types.LOGOUT_SUCCEEDED, payload: false });
  } catch (e) {
    yield put({ type: types.LOGOUT_FAILED, payload: e });
  }
}
