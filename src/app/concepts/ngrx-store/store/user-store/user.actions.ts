import { createAction, props } from "@ngrx/store";
import { AuthUser } from "../../../model";

export const loginAction = createAction(
  "[User] Login",
  props<{ email: string; name: string }>()
);

export const loginSuccessAction = createAction(
  "[User] Login Success",
  props<{ user: AuthUser }>()
);

export const loginFailureAction = createAction(
  "[User] Login Failure",
  props<{ error: string }>()
);

export const logoutAction = createAction("[User] Logout");
