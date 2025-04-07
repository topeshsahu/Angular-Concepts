import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { guardRoutes } from "./concepts/route-guards";
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  // providers for the router-guard
  // providers: [provideRouter(guardRoutes)],

  providers: [provideStore()],
};
