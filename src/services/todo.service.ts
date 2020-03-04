import {TodoInterface} from "../interfaces/todo.interface";
import {MOCK_TODO_LIST} from "../shared/mocks/todoList.mock";

export class TodoService {
    static getTodoList(): Promise<TodoInterface[]> {
        return Promise.resolve(MOCK_TODO_LIST);
    }

    static createTodo(todo: TodoInterface): Promise<TodoInterface> {
        return Promise.resolve(todo);
    }
}
