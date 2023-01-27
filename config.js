const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbDatabase: process.env.DB_DATABASE,
};
