import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone:true,
  imports:[FormsModule]
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';  // Replacing phone with email
  message: string = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    const formData = {
      name: this.name,
      email: this.email,  // Send email instead of phone
      message: this.message,
      subject: "Inquiry from Contact Us Form"  // Constant subject
    };

    this.contactService.sendContactForm(formData).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
      },
      (error) => {
        console.error('Error sending email', error);
      }
    );
  }
}
