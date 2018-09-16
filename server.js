const { ApolloServer, gql, MockList } = require('apollo-server');
const typeDefs =  require('./schemas/schema.js').typeDefs;
const resolvers =  require('./schemas/resolvers.js').resolvers;

const casual = require('casual');

const mocks = {
  Region: () => ({
    name: casual.state,
    summaries:  () => new MockList([4,4])
  }),
};




// const typeDefs = gql`

//   interface INode  {
//     id: ID!
//   }

//   scalar Date

//   enum SummaryKind {
//     IN,
//     OUT,
//     CROSS,
//     PASSENGERS
//   }
  
//   type Summary implements INode {
//     id: ID!

//     kind: SummaryKind!
//     value: Int!
//   }
  
//   type Region implements INode{

//     id: ID!

//     objectId: Int,
//     name: String,
//     summary(from: Date!, till: Date!, kind: SummaryKind!): Summary,
//     summaries(from: Date!, till: Date!): [Summary!]
//   }

//   type Query {
//     region(objectId: Int!): Region,
//   }

// `;


// const resolvers = {
//   Query: {
//     region: () => books,
//   },
// };

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    mocks

  });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});