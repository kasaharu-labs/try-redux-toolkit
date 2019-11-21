import { Component, OnInit } from '@angular/core';
import { CounterCommand } from '../../applications/counter.command';
import { CounterQuery } from '../../applications/counter.query';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor(private counterCommand: CounterCommand, private counterQuery: CounterQuery) {}
  counter$ = this.counterQuery.counter$;

  ngOnInit() {}

  onClickPlusButton() {
    this.counterCommand.increment();
  }

  onClickMinusButton() {
    this.counterCommand.decrement();
  }

  onClickResetButton() {
    this.counterCommand.reset();
  }

  onClickAdd100() {
    this.counterCommand.add100();
  }
}
