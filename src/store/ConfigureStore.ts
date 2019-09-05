import { createStore, applyMiddleware } from 'redux';
import reducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = process.env.NODE_ENV === "development" ? composeWithDevTools(
  applyMiddleware()
  // other store enhancers if any
)
:
applyMiddleware();

export const store = createStore(
  reducer, 
  enhancers
);