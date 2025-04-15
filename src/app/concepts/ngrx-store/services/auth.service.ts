import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { loginAction, logoutAction } from "../store/user-store/user.actions";
import {
  selectUser,
  selectIsAuthenticated,
} from "../store/user-store/user.selector";
import { AuthUser, Credentials, UserRoles } from "../../model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class AuthService {
  user$: Observable<AuthUser | null>;
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store, private http: HttpClient) {
    this.user$ = this.store.select(selectUser);
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  login({ email, password }: Credentials): Observable<AuthUser> {
    // Simulate API call
    this.http
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .subscribe({
        next: (res) => console.log(res),
        error: (err) => console.log(err),
      });

    return of({ name: "Topesh Sahu", email, id: "1", role: UserRoles.ADMIN });
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
