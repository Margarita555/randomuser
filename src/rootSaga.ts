import { all, fork } from "redux-saga/effects";
import { watchUsersSaga, watchPageSaga } from "./modules/users/watchers";

export default function* rootSaga() {
  yield all([
    fork(watchUsersSaga),
    fork(watchPageSaga),
  ]);
}
