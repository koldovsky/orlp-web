import { TestBed, inject } from '@angular/core/testing';

import { TransactionshistoryService } from './transactionshistory.service';

describe('TransactionshistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionshistoryService]
    });
  });

  it('should be created', inject([TransactionshistoryService], (service: TransactionshistoryService) => {
    expect(service).toBeTruthy();
  }));
});
