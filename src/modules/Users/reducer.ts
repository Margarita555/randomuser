import { Reducer } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import * as types from "./actionTypes";
import { IUserState } from "./models";

const initialState = {
  users: [],
  loading: false,
  error: null,
  pageNumber: 1,
};

const usersReducer: Reducer<IUserState | undefined, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case types.USERS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.USERS_FETCH_SUCCEEDED:
      const pageMatchesUsersLength = state.users.length / 10 === state.pageNumber;
      const usersAmountPerPage = 10;
      return {
        ...state,
        loading: false,
        users: pageMatchesUsersLength
          ? [...state.users.slice(0, state.users.length - usersAmountPerPage), ...action.payload]
          : [...state.users, ...action.payload],
      };
    case types.PAGE_UPDATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        pageNumber: state.pageNumber + 1,
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
