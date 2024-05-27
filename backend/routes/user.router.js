const { Router } = require('express');
const userRouter = Router()
const { registerUserApi, loginUserApi, getUser } = require('./../api/user/user.api');

userRouter.post('/user/login', loginUserApi)
userRouter.get('/user/:id', getUser);
userRouter.post('/user', registerUserApi);

module.exports = userRouter;