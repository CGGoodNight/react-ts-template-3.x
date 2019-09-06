import { fromJS } from 'immutable';
import {
  CHANGE_LANGUAGE,
} from './constants';

const initState = fromJS({
  language: "zh"
});

function languageReducer(state: any = initState, action: any) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return state.set("language", action.payload)
    default:
      return state;
  }
}

export default languageReducer;
