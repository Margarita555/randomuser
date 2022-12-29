import { Reducer } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import * as types from "./actionTypes";
import { IAuthState } from "./models";

const initialState = {
  isLoggedIn: null,
  loading: false,
  error: null,
};

const authReducer: Reducer<IAuthState | undefined, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUESTED:
    case types.LOGOUT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCEEDED:
      return {
        ...state,
        loading: false,
        isLoggedIn: action.payload,
      };
    case types.LOGOUT_SUCCEEDED:
      return {
        ...state,
        loading: false,
        isLoggedIn: action.payload,
      };
    case types.LOGIN_FAILED:
    case types.LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
