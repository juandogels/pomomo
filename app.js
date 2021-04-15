const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
const itemDBsRoute = require('./routes/ItemDBs');
const shopDBsRoute = require('./routes/shopDBs');
const monsterDBsRoute = require('./routes/monsterDBs');

app.use('/itemDBs', itemDBsRoute);
app.use('/shopDBs', shopDBsRoute);
app.use('/monsterDBs', monsterDBsRoute);

app.get('/', (req, res) => {
    res.send('Home page');
})

//Connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('Connected to MongoDB')
);
app.listen(3000);