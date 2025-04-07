import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { guardRoutes } from './concepts';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(guardRoutes)],
};
