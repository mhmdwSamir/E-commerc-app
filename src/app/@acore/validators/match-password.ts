import { Validator, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MatchPassword implements Validator {
  validate(formgroup: FormGroup) {
    const { password, confirmpassword } = formgroup.value;
    console.log(password, confirmpassword);
    if (password === confirmpassword) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
