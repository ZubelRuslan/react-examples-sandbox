import {call, put, takeEvery} from 'redux-saga/effects'
import {TodoService} from "../../services/todo.service";
import {
    Actions,
    addTodoFailureAction,
    addTodoSuccessAction,
    getTodoListFailureAction,
    getTodoListSuccessAction
} from "./todos.actions";
import {Action} from "../interfaces/action.interface";
import {TodoInterface} from "../../interfaces/todo.interface";

function* getTodos() {
    try {
        const todoList = yield call(TodoService.getTodoList);
        yield put(getTodoListSuccessAction(todoList))
    } catch (e) {
        yield put(getTodoListFailureAction(e))
    }
}

function* addTodo(action: Action<TodoInterface>) {
    try {
        const todo = yield call(TodoService.createTodo, action.payload);
        yield put(addTodoSuccessAction(todo))
    } catch (e) {
        yield put(addTodoFailureAction(e))
    }
}

export default function* todosSaga() {
    yield takeEvery(Actions.GET_TODO_LIST, getTodos);
    yield takeEvery(Actions.ADD_TODO, addTodo);
}
