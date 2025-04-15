import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import {
    loginAction,
    loginSuccessAction,
    loginFailureAction,
} from "./user.actions";
import { AuthService } from "../../services/auth.service";

@Injectable()
export class UserEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            mergeMap(({ email, name }) => {
                console.log("🚀 ~ UserEffects ~ mergeMap ~ email:", email)
                return this.authService.login({ email, name }).pipe(
                    map((user) => loginSuccessAction({ user })),
                    catchError((error) =>
                        of(loginFailureAction({ error: error.message }))
                    )
                )
            })
        )
    );

    constructor(private actions$: Actions, private authService: AuthService) { }
}
