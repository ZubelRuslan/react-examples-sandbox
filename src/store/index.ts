import {combineReducers} from 'redux';
import {reducer as todosReducer} from './todos/todos.reducers';

export default combineReducers({
    todos: todosReducer
});
