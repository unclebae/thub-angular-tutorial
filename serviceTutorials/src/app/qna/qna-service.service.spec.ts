import { TestBed } from '@angular/core/testing';

import { QnaServiceService } from './qna-service.service';

describe('QnaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QnaServiceService = TestBed.get(QnaServiceService);
    expect(service).toBeTruthy();
  });
});
