import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loggedIn!: boolean;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.loggedIn = isLoggedIn;
    });

  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }
}
