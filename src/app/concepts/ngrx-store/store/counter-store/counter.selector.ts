import { CounterState } from "@model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const selectCounterState = createFeatureSelector<CounterState>("counter");

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.count
);
