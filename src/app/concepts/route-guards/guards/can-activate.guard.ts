import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const canActivateGuard: CanActivateFn = (): boolean | UrlTree => {
  const router = inject(Router);
  return true;
};
