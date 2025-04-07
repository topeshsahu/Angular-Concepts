import { Route } from '@angular/router';
import {
  DashboardComponent,
  LoginComponent,
  UnauthorizedPageComponent,
} from './components';
import { canActivateGuard } from './guards';

export const guardRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [canActivateGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
