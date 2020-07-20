import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { UserCredintials } from './models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: UserCredintials;
  userSubscribtion: Subscription;
  constructor(private _authService: AuthService, private router: Router) {
    this._authService.user.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
  logout() {
    this._authService.loggout();
    this.router.navigate(['']);
  }
  ngOnDestroy() {
    if (this.userSubscribtion) {
      this.userSubscribtion.unsubscribe();
    }
  }
}
