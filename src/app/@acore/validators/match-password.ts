import { AbstractControl, Validator } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MatchPassword implements Validator {
  validate(control: AbstractControl) {
    const { password, cofirmpassword } = control.value;
    console.log(password, cofirmpassword);
    if (password === cofirmpassword) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
