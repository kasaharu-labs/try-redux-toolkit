import { Component, OnInit } from '@angular/core';
import { CounterQuery } from '../../applications/counter.query';
import { actions, store } from '../../store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(private counterQuery: CounterQuery) {}
  counter$ = this.counterQuery.counter$;

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
