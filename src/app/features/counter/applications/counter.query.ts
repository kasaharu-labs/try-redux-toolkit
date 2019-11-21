import { Injectable } from '@angular/core';
import { createSelector } from '../store';

@Injectable({
  providedIn: 'root',
})
export class CounterQuery {
  counter$ = createSelector<number>((state) => state.counter);
  constructor() {}
}
