import { TestBed, async, inject } from '@angular/core/testing';

import { TicketDetailsGuard } from './ticket-details.guard';

describe('TicketDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketDetailsGuard]
    });
  });

  it('should ...', inject([TicketDetailsGuard], (guard: TicketDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
