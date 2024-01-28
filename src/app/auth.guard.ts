// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Replace with your auth service

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated) {
      console.log("11111");
      return true; // User is authenticated, allow access to the route
    } else {
      // User is not authenticated, redirect to the home page
      console.log("22222");
      this.router.navigate(['/home']);
      return false;
    }
  }
}
