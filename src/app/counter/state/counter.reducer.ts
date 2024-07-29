import { createReducer, on } from "@ngrx/store"
import { initaiState } from "./counter.state"
import { decrement, incremant, reset } from "./counter.action"
import { state } from "@angular/animations";

const _counterReducer = createReducer(initaiState,
  on(incremant, (state) => {
    return {
      ...state, counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state, counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state, counter: 0,
    };
  })


);


export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action)
}
