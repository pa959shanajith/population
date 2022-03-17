const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const Logger = require('./logger');

module.exports = async ({expressApp}) => {
    const mongooseConnection = await mongooseLoader();
    Logger.info('Db loaded and connected');

    await expressLoader({app:expressApp});
    Logger.info('Express loaded');
}