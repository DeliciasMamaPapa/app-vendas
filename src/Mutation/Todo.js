export default `
type Mutation {
    createTodo(content: String!, isCompleted: Boolean!): Todo!
    updateTodo(id: ID!, content: String, isCompleted: Boolean): Todo!
    deleteTodo(id: ID!): Todo!
}`;