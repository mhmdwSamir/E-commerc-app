import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { MatchPassword } from '../@acore/validators/match-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  formRegister = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z0-9]/),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern(/^[A-Za-z]\w{7,14}$/),
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(15),
        Validators.pattern(/^[A-Za-z]\w{7,14}$/),
      ]),
    },
    { validators: [this._matchPassword.validate] }
  );
  constructor(
    private _authService: AuthService,
    private router: Router,
    private _matchPassword: MatchPassword
  ) {}

  ngOnInit(): void {}

  register() {
    // call some method in service

    if (this.formRegister.invalid) {
      return;
    }
    this._authService.register(this.formRegister.value).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['']);
  }
}
