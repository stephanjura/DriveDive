const sqlite3 = require('sqlite3').verbose();

const conn = new sqlite3.Database('./dd.db', sqlite3.OPEN_READWRITE, err => {
    if (err) return console.error(err.message);
})

module.exports.conn = conn;