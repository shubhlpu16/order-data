require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
require('./db/mongoose.js');
cors = require('cors');
const catalogueRouter = require('./routers/catalogue');
const orderRouter = require('./routers/orders');

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/.netlify/functions/api', orderRouter);
app.use('/.netlify/functions/api', catalogueRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
