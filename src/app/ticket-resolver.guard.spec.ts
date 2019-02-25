import { TestBed, async, inject } from '@angular/core/testing';

import { TicketResolverGuard } from './ticket-resolver.guard';

describe('TicketResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketResolverGuard]
    });
  });

  it('should ...', inject([TicketResolverGuard], (guard: TicketResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
