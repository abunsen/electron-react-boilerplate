// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const PUSHCHAR = 'PUSHCHAR';
export const POPCHAR = 'POPCHAR';
export const EQUAL = 'EQUAL';
export const CLEAR = 'CLEAR';

export function clearNum() {
  return {
    type: CLEAR
  };
}

export function pushChar(userInput) {
  let char = userInput;
  return (dispatch: Dispatch, getState: GetState) => {
    const prevAmt = getState().calculator;
    let newAmt;

    // handle dots
    if (prevAmt.indexOf('.') > -1 && char === '.'){
      char = ''
    }
    // first char is a dot?
    if(prevAmt === '0' && char === '.'){
      char = '0.'
    }

    // keeps machar sendable amount to $999,999.00 
    if (prevAmt.length >= 9 && char !== '<') {
      char = ''
    }

    // more dot handling - allow numbers that start with 0. get some help
    if(prevAmt === '0.' || prevAmt === '0.0'){
      newAmt = prevAmt.toString()+char;  
    } else {
      newAmt = parseFloat(prevAmt) ? prevAmt.toString()+char : char.toString();  
    }

    if (newAmt.length < 1){
      newAmt = "0"
    }

    dispatch({
      type: PUSHCHAR,
      number: newAmt
    });
  };
}

export function popChar() {
  return {
    type: POPCHAR
  };
}

export function equal() {
  return {
    type: EQUAL
  };
}
