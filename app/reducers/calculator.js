/* eslint no-eval: 0 */
// @flow
import { PUSHCHAR, POPCHAR, EQUAL, CLEAR } from '../actions/calculator';
import type { Action } from './types';

export default function calculator(state: number = '0', action: Action) {
  switch (action.type) {
    case EQUAL:
      return eval(state).toString();
    case PUSHCHAR:
      return action.number;
    case POPCHAR:
      return state.slice(0, -1)||"0";
    case CLEAR:
      return "0";
    default:
      return state;
  }
}
