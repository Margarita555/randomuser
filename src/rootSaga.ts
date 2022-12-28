import { all, fork } from "redux-saga/effects";
import { watchUsersSaga, watchUserInfoSaga } from "./modules/users/watchers";

export default function* rootSaga() {
  yield all([fork(watchUsersSaga), fork(watchUserInfoSaga)]);
}
