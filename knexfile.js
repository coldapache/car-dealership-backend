module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/car_dealership'
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};