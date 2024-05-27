require('dotenv').config();
const express = require('express');
const { configRoutes } = require('./router');
const app = express();
const PORT = process.env.PORT || 5000;
const { conn } = require('./conn');
var cors = require('cors')

app.use(express.json());
app.use(cors())


app.listen(PORT, () => {
    console.warn(`Listening on port ${PORT}!`);
    conn.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );
    `);//*/
    conn.run(`CREATE TABLE IF NOT EXISTS cars (
        id INTEGER PRIMARY KEY,
        make TEXT NOT NULL,
        model TEXT NOT NULL,
        year INTEGER NOT NULL,
        color TEXT,
        price REAL,
        mileage INTEGER,
        condition TEXT,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
    `);
    configRoutes(app);
    //conn.run('DROP TABLE Searches');
})