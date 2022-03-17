const Router = require('express');
const country = require('@api/routes/country');
const user = require("@api/routes/user");



module.exports = () => {
    const app = Router();
    country(app)
    user(app)
    return app;
}