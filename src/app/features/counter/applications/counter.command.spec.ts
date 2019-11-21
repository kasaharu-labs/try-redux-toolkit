import { TestBed } from '@angular/core/testing';

import { CounterCommand } from './counter.command';

describe('CounterCommand', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const command: CounterCommand = TestBed.get(CounterCommand);
    expect(command).toBeTruthy();
  });
});
