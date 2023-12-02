// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import apiMiddleware from 'redux-devise-axios';
// import rootReducer from './reducers/index';
// import axios from 'axios';

// const options = { axios };

// const enhancers = compose(
//   applyMiddleware(thunk, apiMiddleware(options)),
//   // TODO UNCOMMENT WHEN IN DEVELOPMENT
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const store = createStore(rootReducer, {}, enhancers);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from 'redux-devise-axios';
import rootReducer from './reducers/index';
import axios from 'axios';

const options = { axios };

// Check if Redux DevTools extension is installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunk, apiMiddleware(options))
);

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
