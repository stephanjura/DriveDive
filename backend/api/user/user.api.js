const bcrypt = require('bcrypt');
const { conn } = require('./../../conn');
const { SALT_ROUNDS, JWT_SECRET } = require('./../../const')
var jwt = require('jsonwebtoken');

module.exports.registerUserApi = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send('!OK')
    }

    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        
        conn.run(sql, [name, email, hashedPassword], function(err) {
            if (err) {
                return res.status(500).send("!OK")
            }
            res.status(201).send()
        });
    } catch(err) {
        res.status(500).send()
    }
};

module.exports.loginUserApi = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send()
    }

    const sql = `SELECT id, name, email, password FROM users WHERE email = ?`;
    conn.get(sql, [email], async (err, user) => {
        if (err) {
            return res.status(500).send()
        }

        if (!user) {
            return res.status(400).send()
        }
		console.log(user);
        try {
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(400).send()
            }
            let token = jwt.sign({ id: user.id }, JWT_SECRET);
            res.status(201).send(token)
        } catch (err) {
            console.error(err);
            res.status(500).send()
        }
    });
};


module.exports.getUser = async (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    conn.get(sql, userId, (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch user' });
        }
        if (!row) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({ user: row });
    });
}