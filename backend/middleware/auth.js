const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./../const')


const isAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (!token) {
            return res.status(401).send();
        }
        const decodedJwt = jwt.verify(token, JWT_SECRET);
        if (!decodedJwt) {
            return res.status(401).send();
        }
        const { id } = decodedJwt;
        if (id) {
            res.locals.userId = id;
            next();
        } else {
            return res.status(401).send();
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    } //*/
};

module.exports = isAuth;
