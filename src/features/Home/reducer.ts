import { fromJS } from 'immutable';
import {
  FETCH_CLIENT_VERSION_REQUEST,
} from './constants';

const initState = fromJS({
  name: "",
  version: 0
});

function HomeReducer(state: any = initState, action: any) {
  switch (action.type) {
    case FETCH_CLIENT_VERSION_REQUEST:
      return state.set("name", action.payload.name).set("version", action.payload.version);
    default:
      return state;
  }
}

export default HomeReducer;
