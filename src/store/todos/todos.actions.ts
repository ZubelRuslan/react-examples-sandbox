import {TodoInterface} from "../../interfaces/todo.interface";
import {Action} from "../interfaces/action.interface";

export const Actions = {
    ADD_TODO: '[todo] Add Todo',
    ADD_TODO_SUCCESS: '[todo] Add Todo Success',
    ADD_TODO_FAILURE: '[todo] Add Todo Failure',
    UPDATE_TODO: '[todo] Update todo',
    DELETE_TODO: '[todo] Delete todo',
    TOGGLE_TODO: '[todo] Toggle todo',
    GET_TODO_LIST: '[todo] Get Todo List',
    GET_TODO_SUCCESS: '[todo] Get Todo List Success',
    GET_TODO_FAILURE: '[todo] Get Todo List Failure',
};

export const addTodoAction = (text: string): Action<TodoInterface> => ({
    type: Actions.ADD_TODO,
    payload: {
        id: (new Date()).getTime(),
        text
    },
});

export const addTodoSuccessAction = (todo: TodoInterface): Action<TodoInterface> => ({
    type: Actions.ADD_TODO_SUCCESS,
    payload: todo,
});

export const addTodoFailureAction = (error?: any): Action<any> => ({
    type: Actions.ADD_TODO_FAILURE,
    payload: error,
});

export const updateTodoAction = (id: number, text: string): Action<TodoInterface> => ({
    type: Actions.ADD_TODO,
    payload: {
        id,
        text
    },
});

export const deleteTodoAction = (id: number): Action<number> => ({
    type: Actions.ADD_TODO,
    payload: id,
});

export const toggleTodoAction = (id: number): Action<number> => ({
    type: Actions.TOGGLE_TODO,
    payload: id,
});

export const getTodoListAction = (): Action<any> => ({
    type: Actions.GET_TODO_LIST,
    payload: null
});

export const getTodoListSuccessAction = (todos: TodoInterface[]): Action<TodoInterface[]> => ({
    type: Actions.GET_TODO_SUCCESS,
    payload: todos
});

export const getTodoListFailureAction = (error?: any): Action<any> => ({
    type: Actions.GET_TODO_SUCCESS,
    payload: error
});
