import { TestBed } from '@angular/core/testing';

import { CounterQuery } from './counter.query';

describe('CounterQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: CounterQuery = TestBed.get(CounterQuery);
    expect(query).toBeTruthy();
  });
});
