import { createStore as configureStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const isServer = typeof window === 'undefined';

export default function createStore(initialState) {
  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    return configureStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(loggerMiddleware, thunkMiddleware),
        !isServer && window.devToolsExtension ? window.devToolsExtension() : func => func,
      ),
    );
  }

  return configureStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      !isServer && window.devToolsExtension ? window.devToolsExtension() : func => func,
    ),
  );
}
