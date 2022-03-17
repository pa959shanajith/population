require('module-alias/register')

const express = require('express');
const config = require("@config");
const Logger = require("@loaders/logger");


async function startServer(){
    const app = express();
    await require('@loaders')({expressApp:app});

    app.listen(config.port,() => {
        Logger.info(`server listening on port ${config.port}`);
    }).on('error', err => {
        Logger.error(err);
        process.exit(1);
    })
}
startServer();
