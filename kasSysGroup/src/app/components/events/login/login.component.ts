import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[FormsModule, CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  // constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // this.authService.login(this.username, this.password).subscribe(
    //   (response) => {
    //     const userRole = response.role; // Assuming response includes role data
    //     if (userRole === 'Customer') {
    //       this.router.navigate(['/customer-account']);
    //     } else if (userRole === 'Partner') {
    //       this.router.navigate(['/partner-account']);
    //     } else {
    //       this.errorMessage = 'Invalid role!';
    //     }
    //   },
    //   (error) => {
    //     this.errorMessage = 'Invalid username or password';
    //   }
    // );
  }
}
