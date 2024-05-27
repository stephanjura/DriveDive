const { conn } = require('./../conn');


module.exports.createCar = async (req, res) => {
    console.log('====================================');
    console.log(res.locals.userId);
    console.log('====================================');
    const newCar = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color,
        price: req.body.price,
        mileage: req.body.mileage,
        condition: req.body.condition,
        user_id: res.locals.userId
    };
    const sql = `INSERT INTO cars (make, model, year, color, price, mileage, condition, user_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [newCar.make, newCar.model, newCar.year, newCar.color, newCar.price, newCar.mileage, newCar.condition, newCar.user_id];
    conn.run(sql, values, function(err) {
        if (err) {
            res.status(500).send()
            return console.error(err.message);
        }
        console.log(`A new car has been added with rowid ${this.lastID}`);
        res.status(201).send()
    });
}

module.exports.delCar = async (req, res) => {
    const carId = req.params.id;

    // Execute SQLite query to delete the car with the specified ID
    const sql = 'DELETE FROM cars WHERE id = ?';
    conn.run(sql, carId, function(err) {
        if (err) {
            return res.status(500).json({ message: 'Failed to delete car' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    });
}

module.exports.getMyCars = async (req, res) => {
    const userId = res.locals.userId;

    console.log('====================================');
    console.log(userId);
    console.log('====================================');
    // Execute SQLite query to retrieve all cars of the specified user
    const sql = 'SELECT * FROM cars WHERE user_id = ?';
    conn.all(sql, userId, (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch cars' });
        }
        res.status(200).json({ cars: rows });
    });
}

module.exports.getCars = async (req, res) => {
    const sql = 'SELECT * FROM cars WHERE user_id';
    conn.all(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch cars' });
        }
        res.status(200).json({ cars: rows });
    });
}