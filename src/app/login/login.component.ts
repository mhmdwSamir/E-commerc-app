import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  email: string;
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const userCreditinal = {
      name: this.name,
      password: this.password,
      email: this.email,
    };

    this._authService.login(userCreditinal).subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}
