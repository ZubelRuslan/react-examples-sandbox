import {TodoInterface} from "../../interfaces/todo.interface";
import {Action} from "../interfaces/action.interface";

export const Actions = {
    ADD_TODO: '[todo] Add todo',
    UPDATE_TODO: '[todo] Update todo',
    DELETE_TODO: '[todo] Delete todo',
    TOGGLE_TODO: '[todo] Toggle todo',
};

export const addTodoAction = (text: string): Action<TodoInterface> => ({
    type: Actions.ADD_TODO,
    payload: {
        id: (new Date()).getTime(),
        text
    },

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
