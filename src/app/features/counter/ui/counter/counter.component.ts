import { Component, OnInit } from '@angular/core';
import { actions, createSelector, store } from '../../store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  counter = createSelector<number>((state) => state.counter);

  ngOnInit() {}

  onClick() {
    store.dispatch(actions.increment());
  }
}
