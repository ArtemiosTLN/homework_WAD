const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Passwort",
    database: "hw4WAD",
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
	    "id" SERIAL PRIMARY KEY,         
	    "date" DATE NOT NULL,
        "author" VARCHAR(200) NOT NULL,
	    "content" VARCHAR(200) NOT NULL,
        "image" VARCHAR(200)  
    );
`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posts" table');
    }
});

module.exports = pool;