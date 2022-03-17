import { createStore,compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../redux/reducers';
export const history = createHistory();

  function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
      reduxImmutableStateInvariant(),
      thunk,
      reactRouterMiddleware,
    ];
  
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(
      applyMiddleware(...middlewares)
      )
    );
  
    return store;
  }

const configureStore = configureStoreDev;

export default configureStore;
