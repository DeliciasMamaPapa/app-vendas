import {
    addTodos,
    updateTodo,
    defaultTodos
} from "../mock";
export default {
    createTodo: (_, {content, isCompleted}) => {
        const newTodo = {
            id: Math.random(),
            content,
            isCompleted
        };
        addTodos(newTodo);
        return newTodo;
    },
    updateTodo: (_, {id, content, isCompleted}) => {
        let updatedTodo = {};

        const result = defaultTodos.map(todo => {
            if (todo.id === id) {
                updatedTodo = {
                    id: todo.id,
                    // for content and isCompleted, we first check if values are provided
                    content: content !== undefined ? content : todo.content,
                    isCompleted: isCompleted !== undefined ? isCompleted : todo.isCompleted
                };
                return updatedTodo;
            } else {
                return todo;
            }
        });
        updateTodo(result);
        return updatedTodo;
    },
    deleteTodo: (_, {id}) => {
        const todoToDelete = defaultTodos.find(x => x.id === id);

        const result = defaultTodos.filter(todo => {
            return todo.id !== todoToDelete.id;
        });

        updateTodo(result);
        return todoToDelete;
    }
}