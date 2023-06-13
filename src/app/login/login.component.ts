import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authentication:AuthenticationService) {}

  formData = this.fb.group({
    username: '',
    password: '',
  });

  fetchLoginDetails() {
    const loginDetails = this.formData.value;
    this.authentication.loginDetails(loginDetails);
  }
}
