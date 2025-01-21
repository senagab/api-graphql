import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'

const typeDefs = gql`
    type User {
        id: String!
        name: String!
    }

    type Query { # criar
        users: [User!]!
    }

    type Mutation {
        createUser(name: String!): User!
    }

`

interface User {
    id: string
    name: string
}

const users: User[] = [];

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },

        Mutation: {
            createUser: (_, args) => {
                // console.log(args)

                const user = {
                    id: randomUUID(),
                    name: args.name,
                }

                users.push(user)

                return user
                // args.name
            }
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀 HTTP server running on ${url}`)
})