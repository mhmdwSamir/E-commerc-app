import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
interface UserCredintials {
  name: string;
  password: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user$ = new Subject<UserCredintials>();
  constructor() {}

  get user() {
    return this._user$.asObservable;
  }
  login(userCredintials: UserCredintials) {
    /// call some end points to login in
    return of(userCredintials);
  }
  register(user: UserCredintials) {
    this._user$.next(user);
    return of(user);
  }
}
