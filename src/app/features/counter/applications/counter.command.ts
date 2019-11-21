import { Injectable } from '@angular/core';
import { actions, store } from '../store';

@Injectable({
  providedIn: 'root',
})
export class CounterCommand {
  constructor() {}

  increment() {
    store.dispatch(actions.increment());
  }

  decrement() {
    store.dispatch(actions.decrement());
  }

  reset() {
    store.dispatch(actions.reset());
  }

  add100() {
    store.dispatch(actions.add(100));
  }
}
