import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { UserCredintials } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user$ = new Subject<UserCredintials>();
  constructor() {}

  get user() {
    //to know who is logged in
    return this._user$.asObservable();
  }
  login(userCredintials: UserCredintials) {
    /// call some end points to login in
    return of(userCredintials);
  }
  register(user: UserCredintials) {
    // make an api call to save user in db
    // update the user subject
    this.setUser(user);
    console.log('user has register successfully', user);
    return of(user);
  }
  loggout() {
    this._user$.next(null);
    console.log('user has logged out succesfully');
  }
  private setUser(user: UserCredintials) {
    this._user$.next(user);
  }
}
