require('dotenv').config();
const express = require('express');
require('./db/mongoose.js');
cors = require('cors');
const catalogueRouter = require('./routers/catalogue');
const orderRouter = require('./routers/orders');

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(orderRouter);
app.use(catalogueRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
