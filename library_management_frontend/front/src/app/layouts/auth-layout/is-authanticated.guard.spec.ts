import { TestBed } from '@angular/core/testing';

import { IsAuthanticatedGuard } from './is-authanticated.guard';

describe('IsAuthanticatedGuard', () => {
  let guard: IsAuthanticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthanticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
