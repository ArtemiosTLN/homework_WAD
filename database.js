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
    INSERT INTO posts (date, author, content, image)
    VALUES
        ('2023-05-10', 'Artemios', 'Exploring Tartu: A Student''s Guide', null),
        ('2023-09-10', 'Artemios', 'Life as a Tartu Student: Balancing Studies & Fun', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D'),
        ('2024-01-13', 'Artemios', 'Tartu''s Seasons: From Snowy Winters to Sunny Springs', 'https://upload.wikimedia.org/wikipedia.org/commons/4/44/Tartu_Raekoja_platsi_vaade.jpg'),
        ('2024-02-15', 'Artemios', 'Tartu University Traditions: Embrace the Culture', null),
        ('2024-02-25', 'Artemios', 'Cultural Delights in Tartu: Museums, Festivals, and Art Scenes', 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D'),
        ('2024-03-10', 'Artemios', 'Navigating Studies at Tartu University: Top 5 Study Hacks', null),
        ('2024-04-01', 'Artemios', 'Tartu''s Green Oasis: Nature Escapes for Students', 'https://upload.wikimedia.org/wikipedia.org/commons/b/b8/Sanatooriumi_park_%28Tartu%29.jpg'),
        ('2024-04-05', 'Artemios', 'Tartu''s Culinary Adventure: Student-Friendly Eateries', null),
        ('2024-05-18', 'Artemios', 'The Spirit of Volunteerism in Tartu: Engaging in Community', null),
        ('2024-06-08', 'Artemios', 'Tartu''s Sports Scene: Fitness and Fun for Students', 'https://images.unsplash.com/photo-1574907060871-4555aa8aca75?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D')
    ;
`;

// A function to execute the previous query
execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posts" table');
    }
});

export default pool