let defaultTodos = [
    {
        id: '0',
        content: 'Buy milk',
        isCompleted: true
    },
    {
        id: '1',
        content: 'Cook some lobster',
        isCompleted: false
    }
];

const addTodos = (newValue) => (
    defaultTodos = [...defaultTodos, newValue]
);

const updateTodo = (updatedValue) => (
    defaultTodos = updatedValue
);

export {
    addTodos,
    updateTodo,
    defaultTodos
}