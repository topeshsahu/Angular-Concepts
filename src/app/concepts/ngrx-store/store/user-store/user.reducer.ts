import { createReducer, on } from "@ngrx/store";
import { initialUserState } from "./user.state";
import { loginSuccessAction, logoutAction } from "./user.actions";

export const userReducer = createReducer(
  initialUserState,
  on(loginSuccessAction, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
  })),
  on(logoutAction, () => initialUserState)
);
