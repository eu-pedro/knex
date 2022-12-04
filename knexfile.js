// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "1234"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migration`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
