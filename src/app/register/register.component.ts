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
  formRegister = new FormGroup({
    name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
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
