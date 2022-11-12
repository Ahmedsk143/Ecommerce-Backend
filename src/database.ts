import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const { ENV } = process.env;
let DBConnection: Pool;

if (ENV === 'dev') {
    DBConnection = new Pool({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME_DEV,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT as unknown as number,
    });
} else if (ENV === 'test') {
    DBConnection = new Pool({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME_TEST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT as unknown as number,
    });
} else {
    // Production
    DBConnection = new Pool({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME_TEST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT as unknown as number,
    });
}

export default DBConnection;
