import { Injectable } from '@angular/core';
import { of } from 'rxjs';
interface UserCredintials {
  name: string;
  password: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  // userCredintials: UserCredintials
  login(userCredintials: UserCredintials) {
    /// call some end points to login in

    return of(userCredintials);
  }
}
