import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ServiceComponent {
  currentSection: string = 'software';  

  showContent(sectionId: string): void {
    this.currentSection = sectionId; 
  }
}
