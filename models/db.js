const mongoose = require('mongoose');
const settings = require('../settings');

module.exports = testEnv => {
  const dbName = settings.db + (testEnv ? '-test' : '');
  const mongo_url = settings.mongo_url;

  //mongoose.connect(process.env.MONGO_URL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.set('useCreateIndex', true);

  const db = mongoose.connection;
  db.on('connected', console.log.bind(console, '[database] Connected to MongoDB.'));
  db.on('error', console.error.bind(console, '[database] Error occured while connecting to MongoDB.'));
};