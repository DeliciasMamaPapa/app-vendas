export default `
type Query {
    allTodos: [Todo!]!
    Todo(id: ID!): Todo!
}
`;