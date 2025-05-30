import process from 'process';

export const config = {
    development: {
        client: 'pg',
        connection: {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            port: 5432,
            ssl: { rejectUnauthorized: false }
        },
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    }
}
export default config;