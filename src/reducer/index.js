import { combineReducers } from 'redux';
import logReducer from './logReducer';
// import devReducer from './devReducer';

export default combineReducers({
  //i give a name log to the logRoducer which mean this is will be it is name in the state
  log: logReducer,
  // dev: devReducer
});
