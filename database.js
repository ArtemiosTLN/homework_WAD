import pkg from 'pg'
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "Passwort",
    database: "testwad",
    host: "localhost",
    port: "5432"
});

export default pool;