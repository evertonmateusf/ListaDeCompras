import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Injectable()
export class AuthPageGuard implements CanActivate {

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // check if user is authenticated
    if (this.firebaseAuthService.getLoggedInUser() != null) {
      return true;
    } else {
      // Navigate to the login page
      this.router.navigate(['login']);
      return false;
    }
  }
}
