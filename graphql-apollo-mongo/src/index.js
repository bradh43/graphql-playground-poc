import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import express from "express";
import typeDefs from "./typeDefs"
import resolvers from "./resolvers";
import { APP_PORT, IN_PROD, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } from './config'

/* 
  Self-invoking asynchronous function
*/
(async () =>  {
  try {    
    // MongoDB on Atlas
    // const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

    // Local MongoDB
    const uri = 'mongodb://localhost:27017/test'

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Connected to MongoDB...')
    });

    const app = express();

    app.disable('x-powered-by');

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: !IN_PROD
    });
      
    server.applyMiddleware({ app });

    app.listen({ port: APP_PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
    )
  } catch (e) {
    console.error(e)
  }
})()