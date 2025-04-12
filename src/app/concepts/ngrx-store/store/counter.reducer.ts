import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({ ...state, count: state.count + 1 })),
    on(decrement, (state) => ({
        ...state,
        count: state.count === 0 ? 0 : state.count - 1,
    })),
    on(reset, () => ({ count: 0 }))
);
