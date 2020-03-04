import TodoList from "../components/TodoList";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {toggleTodoAction} from "../store/todos/todos.actions";
import {RootState} from "../store/interfaces/RootState";

const mapStateToProps = (state: RootState) => ({
    todos: state.todos.todoList
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    toggleTodo: (id: number) => dispatch(toggleTodoAction(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
