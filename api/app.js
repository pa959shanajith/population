require('module-alias/register')
// require('dotenv').config()
// const express = require('express');
// const bodyParser = require('body-parser')
// const axios = require('axios')
// const cors = require('cors')
// const app = express();

// app.use(cors());
// app.use(bodyParser.json({ type: 'application/*+json' }))

// app.post('/getBook', async (req, res) => {
//     let responseFromURL =  await axios.post('http://103.197.59.202:3033/api/getBook', {
//         "bookId": "566041ce-506e-44ef-9cbb-9be493fa230e"
//       });
//       res.send({book : responseFromURL.data })
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`)
// })


const express = require('express');
const config = require("@config");
const Logger = require("@loaders/logger");


async function startServer(){
    const app = express();
    // await require('@loaders').default({expressApp:app});
    await require('@loaders')({expressApp:app});

    app.listen(config.port,() => {
        Logger.info(`server listening on port ${config.port}`);
    }).on('error', err => {
        Logger.error(err);
        process.exit(1);
    })
}
startServer();
