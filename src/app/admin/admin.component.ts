import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router:Router) { }

  ngOnInit() {
    if (this.auth.isLoggedIn === false) {
      this.router.navigate([""]);
    }
  }
}
