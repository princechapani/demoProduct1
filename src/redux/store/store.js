import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/index';
import mySaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export default store;
