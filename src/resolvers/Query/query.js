import { defaultTodos } from "../mock";

export default {
    allTodos: () => {
        return defaultTodos;
    },
    Todo: (_, {id}) => {
        const todo = defaultTodos.find(x => x.id === id);
        if (!todo) {
            throw new Error('Cannot find your todo!');
        }
        return todo;
    }
}