import { combineReducers } from 'redux';
import settingsReducer from './reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  settings: settingsReducer,
  routing: routerReducer
});

export default rootReducer;
