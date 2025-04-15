import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../../../model";

const userSelectState = createFeatureSelector<UserState>("auth");

export const selectUser = createSelector(
  userSelectState,
  (state) => state.user
);
export const selectIsAuthenticated = createSelector(
  userSelectState,
  (state) => state.isAuthenticated
);
