import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { guardRoutes } from "./concepts/route-guards";
import { provideStore } from "@ngrx/store";
import { counterReducer } from "./concepts/ngrx-store/store/counter.reducer";

export const appConfig: ApplicationConfig = {
  // providers for the router-guard
  // providers: [provideRouter(guardRoutes)],

  providers: [provideStore({ counter: counterReducer })],
};
