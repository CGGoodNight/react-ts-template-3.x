import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './rootSaga';
import reducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const enhancers = process.env.NODE_ENV === "development" ? composeWithDevTools(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
)
:
applyMiddleware(sagaMiddleware);

const store = createStore(
  reducer, 
  enhancers
);

sagaMiddleware.run(mySaga)

export default store;