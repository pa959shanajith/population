const {Router} = require('express');
const route = Router();
const middleware = require('../middlewares');
const Logger = require("@loaders/logger");
const userModel = require("@models/users"); 

const ServiceInstance = require('@services/population')
const NewInstance = new ServiceInstance();

module.exports = (app = Router) => {
    app.use('/user',route);
    // middleware.isAuth

    route.post('/register', async(req,res,next) => {
        try {
           await userModel.create(req.body);
          return res.status(200).send('registered !!!!')
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({error:error.message});
        }
    })


    route.post('/login', async(req,res,next) => {
        try {
          let result =  await NewInstance.login(req.body);
          if(!result.status)
          return res.status(400).send(result.msg);
          Logger.info('user Logged in successful');
          return res.cookie("token",result.token,{ httpOnly: true }).send({user:result.user})
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({error:error.message});
        }
    })

    route.get('/logout', async(req,res,next) => {
        try {
            res.clearCookie("token");
            Logger.info('user Logged out successful');
           return res.send({status:true})
        } catch (error) {
            Logger.error(error);
            return res.status(400).send({error:error.message});
        }
    })

    return route
}