// Update with your config settings.
import dotenv from "dotenv";
dotenv.config();

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: { //todo | configure
    client: () => {throw new Error('You are trying to connect to the nonexistant production db.')}
  }

};
