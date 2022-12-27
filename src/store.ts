import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
// // import rootSaga from "./rootSaga";

// // import driversReducer from "./modules/drivers/reducer";

const sagaMiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({ data: usersReducer });

// const store = configureStore({
//   reducer: {
//     drivers: driversReducer,
//   },
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
