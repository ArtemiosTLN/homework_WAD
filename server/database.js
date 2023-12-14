import pkg from 'pg'
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "Passwort",
    database: "hw4WAD",
    host: "localhost",
    port: "62222"
});


const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// A simple query that creates a table in our database
// Note that the "SERIAL"  pseudo-type that is used after the "id" is used to create a sequence object,
// and set the next value generated by the sequence as the default value for the column
const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
	    "id" SERIAL PRIMARY KEY,         
	    "date" DATE NOT NULL,
        "author" VARCHAR(200) NOT NULL,
	    "content" VARCHAR(200) NOT NULL,
        "image" VARCHAR(200)  
    );
`;

// A function to execute the previous query
execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posts" table');
    }
});

export default pool