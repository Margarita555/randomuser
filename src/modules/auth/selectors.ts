import { RootState } from "../../store";

export const isLoggedInSelector = (state: RootState) => state.auth?.isLoggedIn;

export const loadingSelector = (state: RootState) => state.auth?.loading;

export const errorSelector = (state: RootState) => state.auth?.error;
