import { call, put } from "redux-saga/effects";
import * as types from "./actionTypes";
import * as Api from "../../api";
import { IUser } from "./models";

export function* handleFetchUsers(pageNumber: number) {
  try {
    const users: IUser[] = yield call(Api.fetchUsers,pageNumber);
    yield put({ type: types.USERS_FETCH_SUCCEEDED, payload: users });
  } catch (e) {
    yield put({ type: types.USERS_FETCH_FAILED, payload: e });
  }
}

export function* handlePageUpdate() {
  try {
    yield put({ type: types.PAGE_UPDATE_SUCCEEDED });
  } catch (e) {
    yield put({ type: types.PAGE_UPDATE_FAILED, payload: e });
  }
}