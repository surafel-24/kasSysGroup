import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContactService } from '../../services/contact.service';  
import { FormsModule } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactUsComponent {
  name: string = ''; // Simple string variables
  email: string = '';  
  message: string = '';
  // captchaResponse: string = '';
  siteKey: string = '6LdP6nsqAAAAANLfk20SAc6Wgb14IOAY5ZA6CcPO';

  constructor(
    private contactService: ContactService, 
    private reCaptchaV3Service: ReCaptchaV3Service
  ) {}

  onSubmit(contactForm: any) {
    // if (this.captchaResponse) {
    //   console.log('Form submitted:', this.name, this.email, this.message);
    // } else {
    //   console.log('Please complete the CAPTCHA');
    //   return;
    // }

    // Constructing the form data object
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
      subject: "Inquiry from Contact Us Form"
    };

    // Send form data to backend
    this.contactService.sendContactForm(formData).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
        contactForm.reset(); // Reset form after successful submission
      },
      (error) => {
        console.error('Error sending email', error);
      }
    );
  }

  excuteRecaptcha(token: any) {
    this.reCaptchaV3Service.execute('').subscribe((token) => {
      console.log(token);
    });
  }
}
