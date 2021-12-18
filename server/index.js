const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");

require("dotenv").config();

//models
const WhichTeamForm = require('./models/WhichTeamForm')
const Pollster = require('./models/Pollster')

// resolvers
const resolvers = require("./graphql/resolves");

dbconnect = require("./db")();

const server = new ApolloServer({
  typeDefs: importSchema('./graphql/schema.graphql'),
  resolvers,
  context: {
    WhichTeamForm,
    Pollster,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
