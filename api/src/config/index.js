require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";


module.exports = {
    port: parseInt(process.env.PORT, 10),
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,
    databaseURL: process.env.MONGO_URI,
    logs: {
        level: process.env.LOG_LEVEL || 'dev'
    },
    api: {
        prefix: '/api'
    }
};