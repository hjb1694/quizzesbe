// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: '../db/dev.sqlite3'
    },
    migrations: {
      directory: '../db/migrations'
    }, 
    seeds: {
      directory: '../db/seeds'
    }
  },

  

};
