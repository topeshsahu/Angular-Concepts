import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const selectCounterState = createFeatureSelector<CounterState>("counter");

export const selectCount = createSelector(
    selectCounterState,
    (state) => state.count
);
