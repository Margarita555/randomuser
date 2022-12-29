import { all, fork } from "redux-saga/effects";
import { watchLoginSaga, watchLogoutSaga } from "./modules/auth/watchers";
import { watchUsersSaga, watchUserInfoSaga } from "./modules/users/watchers";

export default function* rootSaga() {
  yield all([fork(watchUsersSaga), fork(watchUserInfoSaga), fork(watchLoginSaga), fork(watchLogoutSaga)]);
}
