//PubSub จัดการในส่วนเของ Subscription
const { GraphQLServer, PubSub } = require('graphql-yoga');
const pubsub = new PubSub();

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const users = require('./utils/usersObjectInArray');

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: {
        Query,
        Mutation
    },
    context: {
        users,
        pubsub
    }
})

const options = {
    port: 4700,
    endpoint: '/graphql'
}

server.start(options, ({ port }) =>
    console.log(`Server started on port ${port}.`)
)
