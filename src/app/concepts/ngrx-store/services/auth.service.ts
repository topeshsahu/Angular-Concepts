import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AuthUser, Credentials, UserRoles } from "../../../model";
import { logoutAction } from "../store/user-store/user.actions";
import {
  selectIsAuthenticated,
  selectUser,
} from "../store/user-store/user.selector";

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
