import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
   standalone:true,
  imports:[CommonModule,FormsModule]
})
export class ChatbotComponent implements OnInit {
  messages: { sender: string, text: string }[] = [];
  availableQuestions: string[] = [];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.availableQuestions = this.chatbotService.getAvailableQuestions();
  }

  sendQuestion(question: string) {
    this.messages.push({ sender: 'User', text: question });
    const response = this.chatbotService.getResponse(question);
    this.messages.push({ sender: 'Bot', text: response });
  }


  questions: string[] = [
    'How can I create an account?',
    'What services do you offer?',
    'How do I contact support?',
    'Where are you located?',
    'What are your operating hours?',
    'Can I change my subscription plan?',
    'Is there a mobile app available?',
    'How can I reset my password?',
    'What payment methods are accepted?',
    'How do I track my order?',
  ];

 
}
