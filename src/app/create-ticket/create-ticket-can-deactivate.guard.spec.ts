import { TestBed, async, inject } from '@angular/core/testing';

import { CreateTicketCanDeactivateGuard } from './create-ticket-can-deactivate.guard';

describe('CreateTicketCanDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTicketCanDeactivateGuard]
    });
  });

  it('should ...', inject([CreateTicketCanDeactivateGuard], (guard: CreateTicketCanDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
