
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    typeof window === 'object' &&
        window.hasOwnProperty('__REDUX_DEVTOOLS_EXTENSION__') ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;