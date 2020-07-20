import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  formRegister = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
      Validators.pattern(/^[a-zA-Z0-9]/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z]\w{7,14}$/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    confirmpassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z]\w{7,14}$/),
    ]),
  });
  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    // call some method in service
    this._authService.register(this.formRegister.value).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['']);
  }
}
