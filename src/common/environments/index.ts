import * as dotenv from 'dotenv';
dotenv.config();

const APP_NAME = process.env.APP_NAME || '';
const APP_PORT = process.env.APP_PORT || 3001;

const DB_HOST = process.env.DB_HOST || '';
const DB_PORT = process.env.DB_PORT || '';
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';
const DB_NAME = process.env.DB_NAME || '';

export { APP_NAME, APP_PORT, DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER };
