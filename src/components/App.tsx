import React from 'react'
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import {connect} from "react-redux";
import {getTodoListAction} from "../store/todos/todos.actions";
import {Action, Dispatch} from "redux";

interface Props {
    getTodoList: () => void
}

export class App extends React.Component<Props, any> {
    componentDidMount(): void {
        this.props.getTodoList();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <AddTodo/>
                <VisibleTodoList/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    getTodoList: () => dispatch(getTodoListAction())
});

export default connect(
    () => ({
    }),
    mapDispatchToProps
)(App)
