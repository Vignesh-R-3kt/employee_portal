import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userType: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  loginDetails(loginInfo: any): any {
    const username = loginInfo.username.trim();
    const password = loginInfo.password.trim();

    if (!username && !password) {
      return;
    }

    if (loginInfo.username === 'user' && loginInfo.password === '123') {
      this.userType = 'user';
      this.isLoggedIn = true;
      this.router.navigate(['employee']);
    } else if (loginInfo.username === 'admin' && loginInfo.password === 'admin') {
      this.userType = 'admin';
      this.isLoggedIn = true;
      this.router.navigate(['admin']);
    } else {
      alert('invalid user credentials');
    }
  }
}
