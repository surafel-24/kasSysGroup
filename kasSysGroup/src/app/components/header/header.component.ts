import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  isScrolled: boolean = false;
 lastScrollTop: number = 0;

   toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Handle scroll
@HostListener('window:scroll', [])
onWindowScroll() {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  // Hide menu on scroll down
  if (st > this.lastScrollTop && this.isMenuOpen) {
    this.isMenuOpen = false;
  }

  // Add background on scroll
  this.isScrolled = st > 50;

  this.lastScrollTop = st <= 0 ? 0 : st;
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
  career(){
  this.router.navigate(['/career']);
  }
}



