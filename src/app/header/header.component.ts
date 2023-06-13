import { Component,Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userType: string = "";

  constructor(private auth:AuthenticationService, private router:Router) {}

  logout() {
    this.auth.isLoggedIn = false;
    this.router.navigate([""]);
  }
}
