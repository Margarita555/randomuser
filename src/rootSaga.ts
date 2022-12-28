import { all, fork } from "redux-saga/effects";
import { watchUsersSaga } from "./modules/users/watchers";

export default function* rootSaga() {
  yield all([
    fork(watchUsersSaga),
    // fork(watchUserInfoSaga),
  ]);
}
