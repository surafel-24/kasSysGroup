import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router){}


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
   industries(){
    this.router.navigate(['/industries']);
    }
}
