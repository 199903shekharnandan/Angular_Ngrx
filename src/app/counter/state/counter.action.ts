import { createAction } from "@ngrx/store";

export const incremant = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
