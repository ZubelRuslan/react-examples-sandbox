import React from 'react'
import Todo from './Todo'
import {TodoInterface} from "../interfaces/todo.interface";

interface Props {
    todos: TodoInterface[],
    toggleTodo: (todoId: number) => void;
}

const TodoList = ({todos, toggleTodo}: Props) => (
    <ul>
        {todos.map((todo: TodoInterface) =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;
