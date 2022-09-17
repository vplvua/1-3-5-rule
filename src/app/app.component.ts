import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '1-3-5-rule';
  // isFetching = false;

  constructor(private authServise: AuthService) {}

  ngOnInit() {
    this.authServise.autoLogin();
  }
}
