import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

const logger = createLogger();

export default createStore(reducers, compose(applyMiddleware(thunk, logger)));