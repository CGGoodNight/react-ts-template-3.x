import { combineReducers } from 'redux';
import homeReducer from '../features/Home/reducer';

const appReducer = combineReducers({
  homeReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
