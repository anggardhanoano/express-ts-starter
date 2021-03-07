import { Sequelize } from "sequelize";
const dotenv = require('dotenv')

dotenv.config();

const DB_NAME: string = process.env.DATABASE_NAME;
const USERNAME: string = process.env.USERNAME;
const PASSWORD: string = process.env.PASSWORD;

export const database = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});


// TODO: UNCOMENT THIS LINE IF USING DATABASE
// database.sync().then(() => console.log("db initialize"));