import React from 'react'
import { connect } from 'react-redux'
import {addTodoAction} from "../store/todos/todos.actions";

const AddTodo: React.FC<any>= ({ dispatch }) => {
    let input: HTMLInputElement;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodoAction(input.value));
                input.value = ''
            }}>
                <input ref={node => {
                    if (node) {
                        input = node
                    }
                }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};

export default connect()(AddTodo);
