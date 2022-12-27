import { Reducer } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import * as types from "./actionTypes";
import { IUserState } from "./models";

const initialState = {
  users: [],
  loading: false,
  error: null,
  isLoggedIn: true,
};

const usersReducer: Reducer<IUserState | undefined, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.USERS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
