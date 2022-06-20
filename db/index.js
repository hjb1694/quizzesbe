import knexfile from "../knexfile.js";
import config from "../config/index.js";
import knex from "knex";

console.log('knex path:', knexfile[config.env]);

export default knex(knexfile[config.env]);
