import { configureStore, createSlice } from '@reduxjs/toolkit';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, counter: state.counter + 1 };
    },
  },
});

export const { actions, reducer } = counterSlice;
export const store = configureStore({ reducer });

const state$ = new BehaviorSubject<State>(initialState);
store.subscribe(() => state$.next(store.getState()));

export const createSelector = <T>(mappingFunction: (state: State) => T) => {
  return state$.pipe(map(mappingFunction));
};
