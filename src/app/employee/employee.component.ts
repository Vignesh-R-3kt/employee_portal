import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  constructor(private auth: AuthenticationService, private router:Router) { }

  ngOnInit() {
    if (this.auth.isLoggedIn === false) {
      this.router.navigate([""]);
    }
  }
}
