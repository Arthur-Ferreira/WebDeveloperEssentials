import expressSession from 'express-session'
import mongoDbStore from 'connect-mongodb-session'

function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession)

  const store = new MongoDBStore({
    uri: process.env.URI as string,
    databaseName: 'online-shop',
    collection: 'sessions'
  })

  return store
}

function createSessionConfig() {
  return {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000
    }
  }
}

module.exports = createSessionConfig
