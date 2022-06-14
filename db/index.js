import knexfile from "../config/knexfile.js";
import config from "../config/index.js";
import knex from "knex";

export default knex(knexfile[config.env]);
