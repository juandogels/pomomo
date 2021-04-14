// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv/config');

// //Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// const postsRoute = require('./routes/posts');

// app.use('/posts', postsRoute);

// app.get('/', (req, res) => {
//     res.send('We are on home');
// });
// //Connecting to MongoDB
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
//     console.log('Connected to MongoDB')
// );
// app.listen(3000);

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());

const itemDBsRoute = require('./routes/ItemDBs');
const shopDBsRoute = require('./routes/shopDBs');

app.use('/itemDBs', itemDBsRoute);
app.use('/shopDBs', shopDBsRoute);

app.get('/', (req, res) => {
    res.send('Home page');
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('Connected to MongoDB')
);
app.listen(3000);