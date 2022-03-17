const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const routes =  require('@api');
const config =  require('@config');


module.exports = function ({app = express.application}) {
        app.use(cors({credentials: true, origin: process.env.FRONT_END_URL}));
        app.use(cookieParser());
        app.use(express.json());
        app.use(config.api.prefix, routes());
        app.use((req, res, next) => {
            const err = new Error('Not Found');
            err['status'] = 404;
            next(err);
          });
    }


