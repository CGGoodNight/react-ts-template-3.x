import { combineReducers } from 'redux';
import homeReducer from '../features/Home/reducer';
import languageReducer from "../features/Language/reducer";

const appReducer = combineReducers({
  homeReducer,
  languageReducer
});


export default appReducer;
