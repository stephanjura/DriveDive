const { Router } = require('express');
const { createCar, getCars, getMyCars, delCar } = require('../api/car.api');
const isAuth = require('../middleware/auth');
const carRouter = Router()

carRouter.post('/car', [isAuth], createCar)
carRouter.get('/cars', getCars)
carRouter.get('/mycars', [isAuth], getMyCars)
carRouter.delete('/car/:id', delCar)

module.exports = carRouter;