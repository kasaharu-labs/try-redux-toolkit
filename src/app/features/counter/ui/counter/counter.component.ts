import { Component, OnInit } from '@angular/core';
import { actions, createSelector, store } from '../../store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  counter$ = createSelector<number>((state) => state.counter);

  ngOnInit() {}

  onClickPlusButton() {
    store.dispatch(actions.increment());
  }

  onClickMinusButton() {
    store.dispatch(actions.decrement());
  }

  onClickResetButton() {
    store.dispatch(actions.reset());
  }

  onClickAdd100() {
    store.dispatch(actions.add(100));
  }
}
