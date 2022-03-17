const {Router} = require('express');
const route = Router();
const middleware = require('../middlewares');
const Logger = require("@loaders/logger");

const ServiceInstance = require('@services/population')
const NewInstance = new ServiceInstance();

module.exports = (app = Router) => {
    app.use('/country',route);



    // routes started here
    route.get('/getpopulation/:page',middleware.isAuth, async(req,res,next) => {
        try {
          let result =  await NewInstance.getPopulation(parseInt(req.params.page));
          Logger.info('population data found');
          return res.status(200).send(result);
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({error:error.message});
        }
    })

    route.get('/search/:key/:page',middleware.isAuth, async(req,res,next) => {
        try {
          let result =  await NewInstance.Search(req.params.key,req.params.page);
          if(!result.status){
            Logger.info(result.msg);
            return res.status(400).send({msg:result.msg});
          }
          Logger.info('population data found');
          return res.status(200).send(result);
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({error:error.message});
        }
    })

    return route
}