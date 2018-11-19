// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import calculator from './calculator';

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, calculator })
  );
}
