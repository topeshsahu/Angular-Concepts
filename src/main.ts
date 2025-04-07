import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/concepts/ngrx-store';
// import { HomeComponent } from './app/concepts/route-guards';

bootstrapApplication(HomeComponent, appConfig).catch((err) =>
  console.error(err)
);
