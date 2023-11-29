import { Pool } from 'pg';
const pool=new Pool({
    host:'localhost',
    user: "postgres",
    port: '5432',
    database: "postgres",
    password: "comenius12",
});
export const query = (text, params) => pool.query(text, params);