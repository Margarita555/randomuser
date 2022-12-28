import { call, put } from "redux-saga/effects";
import * as types from "./actionTypes";
import * as Api from "../../api/UsersAPI";
import { IUser } from "./models";

export function* handleFetchUsers() {
  try {
    const users: IUser[] = yield call(Api.fetchUsers);
    yield put({ type: types.USERS_FETCH_SUCCEEDED, payload: users });
  } catch (e) {
    yield put({ type: types.USERS_FETCH_FAILED, payload: e });
  }
}

export function* handleFetchUserById(userId: string) {
  try {
    const users: IUser[] = yield call(Api.fetchUsers);
    const user = users.find(user => user.login.md5 === userId);
    yield put({ type: types.FETCH_USER_BY_ID_SUCCEEDED, payload: user });
  } catch (e) {
    yield put({ type: types.FETCH_USER_BY_ID_FAILED, payload: e });
  }
}
