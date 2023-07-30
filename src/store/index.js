import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // If you need to use thunk middleware
import rootReducer from './rootReducer';

// If you need to use thunk middleware, you can apply it here
const middleware = applyMiddleware(thunk);

// Create the Redux store with the rootReducer and middleware
const store = createStore(rootReducer, middleware);

export default store;
