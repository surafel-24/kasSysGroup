import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the boolean
    const mobileMenu = document.querySelector('.nav-links-mobile');
    if (mobileMenu) {
      mobileMenu.classList.toggle('show-menu', this.isMenuOpen);
    }
  }

  
  home(){
    this.router.navigate(['/']);
  }
  contactus(){
    this.router.navigate(['/contact-us']);
  }
  services(){
    this.router.navigate(['/services']);
  }
  about(){
    this.router.navigate(['/about']);
  }
  partners(){
    this.router.navigate(['/partners']);
  }
  news(){
    this.router.navigate(['events/news']);
  }
  announcement(){
    this.router.navigate(['events/announcement']);
  }
  login(){
    this.router.navigate(['events/login']);
  }
  products(){
   this.router.navigate(['/products']);
  }
}



