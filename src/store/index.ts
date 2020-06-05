import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as todosReducer} from './todos/todos.reducers';
import createSagaMiddleware from 'redux-saga';
import todosSaga from "./todos/todos.sagas";
import {createLogger} from "redux-logger";

const logger = createLogger();

const rootReducer = combineReducers({
    todos: todosReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
    );

sagaMiddleware.run(todosSaga);

export default store;
