
import resolvers from "./resolvers/resolvers";
import { makeExecutableSchema } from "graphql-tools";
import { mergeStrings } from "gql-merge";

//# TYPES
import Todo from "./Types/Todo";

//# QUERIES
import todo_query from "./Queries/todo.js";

//# MUTATIONS
import todo_mutation from "./Mutation/Todo";

export default makeExecutableSchema({
    typeDefs: [
        Todo,
        mergeStrings([
            todo_query
        ]),
        mergeStrings([
            todo_mutation
        ])
    ],
    resolvers,
});