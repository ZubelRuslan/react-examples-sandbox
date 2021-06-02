import React from "react";
import ReactDOM from "react-dom";

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

const todo: Todo = {
    id: new Date().getTime(),
    text: 'Do some work',
    isCompleted: false
}

interface TodoListState {
    todos: Todo[]
}

interface TodoProps {
    isCompleted: boolean;
    text: string;
}


class AddTodoComponent extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    createTodo = () => {
        const todo: Todo = {
            id: new Date().getTime(),
            text: this.state.value,
            isCompleted: false
        };
        this.setState({
            value: ''
        });
        this.props.addTodo(todo)
    }

    render() {
        return (
            <>
                <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.createTodo}>Add TODO</button>
            </>
        );
    }
}



class TodoComponent extends React.Component<TodoProps, any> {

    render() {
        return (
            <>
                <input type="checkbox" checked={this.props.isCompleted}/>
                <span>{this.props.text}</span>
                <button>DELETE</button>
            </>
        );
    }
}

const FuncTodoComponent = (props: TodoProps) =>
    <>
        <input type="checkbox" checked={props.isCompleted}/>
        <span>{props.text}</span>
        <button>DELETE</button>
    </>

class TodoList extends React.Component<any, TodoListState> {
    constructor(props) {
        super(props);
        this.state = {
            todos: [todo]
        };
    }

    todos: Todo[] = [todo];

    addTodo = (todo: Todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        return (
            <>
                <AddTodoComponent
                    addTodo={this.addTodo}
                />

                {this.state.todos.map((todoItem: Todo) =>
                    <TodoComponent
                        isCompleted={todoItem.isCompleted}
                        text={todoItem.text}
                    />
                )}
            </>
        );
    }
}

ReactDOM.render(
    <div className="App">
        <TodoList/>
    </div>,
    document.getElementById('root')
);
