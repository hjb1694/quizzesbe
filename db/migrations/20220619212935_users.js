/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable(users, table => {
        table.increments().primary();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.text('password');
        table.enu('status', ['active', 'deactivated_by_user', 'deactivated_by_admin']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
