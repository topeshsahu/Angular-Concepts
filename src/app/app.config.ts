import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { guardRoutes } from "./concepts/route-guards";
import { provideStore } from "@ngrx/store";
import { counterReducer, userReducer } from "./concepts/ngrx-store/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideEffects } from "@ngrx/effects";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  // providers for the router-guard
  // providers: [provideRouter(guardRoutes)],

  providers: [
    provideStore({ counter: counterReducer, auth: userReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
    provideHttpClient(),
  ],
};
