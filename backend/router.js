const carRouter = require('./routes/car.router');
const userRouter = require('./routes/user.router')

module.exports.configRoutes = app => {
    app.use(userRouter);
    app.use(carRouter);
}