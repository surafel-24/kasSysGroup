import { TestBed } from '@angular/core/testing';

import { ChatbotService } from './chatbot.service';

describe('ChatboatService', () => {
  let service: ChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
