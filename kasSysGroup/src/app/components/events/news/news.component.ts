import { Component, OnInit } from '@angular/core';
import { NewsService, CommentsResponse } from '../../../services/news.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface News {
  id?: number;
  title: string;
  content: string;
  imageUrl?: string;
  likes?: number;
  comments?: string[];
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  standalone: true,
  providers: [NewsService],
  imports: [FormsModule, CommonModule],
})
export class NewsComponent implements OnInit {
  relatedArticles: News[] = [];
  headlines: News[] = [];
  selectedNews: News | undefined;
  newComment: string = '';
  showAllComments: boolean = false; // Track whether to show all comments
  displayedComments: string[] = []; // Track comments to display

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.headlines = data;
      this.selectedNews = this.headlines[0];
      this.getComments(this.selectedNews.id!); // Fetch comments for the initially selected news
    });
  }

  selectNews(news: News): void {
    this.selectedNews = news;
    if (news.id) {
      this.newsService.getRelatedNews(news.id).subscribe((data) => {
        this.relatedArticles = data;
      });
      this.getComments(news.id);
    }
  }

  getComments(id: number): void {
    this.newsService.getComments(id).subscribe({
      next: (response: CommentsResponse) => {
        const comments = response.comments;
        this.displayedComments = this.showAllComments
          ? comments
          : comments.slice(0, 2);
        if (this.selectedNews) {
          this.selectedNews.comments = comments;
        }
      },
      error: (error) => {
        console.error('Error fetching comments:', error);
        this.displayedComments = [];
      },
    });
  }

  updateDisplayedComments(): void {
    if (this.selectedNews && this.selectedNews.comments) {
      this.displayedComments = this.showAllComments
        ? this.selectedNews.comments
        : this.selectedNews.comments.slice(0, 2);
    } else {
      this.displayedComments = [];
    }
  }

  toggleShowAllComments(): void {
    this.showAllComments = !this.showAllComments;
    this.updateDisplayedComments(); // Update displayed comments based on the toggle
  }

  likeNews(news: News | undefined): void {
    if (news && news.id) {
      this.newsService.likeNews(news.id).subscribe((updatedNews) => {
        news.likes = updatedNews.likes;
      });
    }
  }

  shareNews(news: News | undefined): void {
    if (news && news.id) {
      const shareLink = `${window.location.origin}/news/${news.id}`;
      navigator.clipboard
        .writeText(shareLink)
        .then(() => {
          alert(`Link copied to clipboard! Share this link: ${shareLink}`);
        })
        .catch(() => {
          alert('Failed to copy the link. Please try again.');
        });
    }
  }

  addComment(): void {
    if (this.selectedNews && this.selectedNews.id && this.newComment.trim()) {
      this.newsService
        .addComment(this.selectedNews.id, this.newComment)
        .subscribe(
          (updatedNews) => {
            this.newComment = '';
            // Fetch updated comments after adding a new comment
            this.getComments(this.selectedNews?.id!);
          },
          (error) => {
            console.error('Error adding comment:', error);
          }
        );
    } else {
      alert('Please enter a comment before posting.');
    }
  }
}
