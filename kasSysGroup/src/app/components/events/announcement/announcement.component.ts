import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../../services/announcement.service';
import { CommonModule } from '@angular/common';


interface Announcements {
  id?: number;
  title: string;
  content: string;
  imageUrl?: string;
  likes?: number;
}
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AnnouncementComponent implements OnInit {
  announcements: any[] = []; 


  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.fetchAnnouncements();
  }

  fetchAnnouncements() {
    this.announcementService.getAnnouncements().subscribe((data: any) => {
      this.announcements = data; 
      console.log(data) 
    });
  }


  likeAnnouncement(announcements: Announcements | undefined): void {
    
    if (announcements && announcements.id) {
      this.announcementService.likeAnnouncement(announcements.id).subscribe(updatedlikeAnnouncement => {
        announcements.likes = updatedlikeAnnouncement.likes;
        // announcements.likes += 1;
      });
    }
  }

  shareAnnouncement(announcement: any) {
    alert('Announcement shared!');
  }
}
