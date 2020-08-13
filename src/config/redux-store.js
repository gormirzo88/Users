import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../store/reducers';
import { watchLoadData } from "../sagas/sagas";
import logger from 'redux-logger'


const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchLoadData)
