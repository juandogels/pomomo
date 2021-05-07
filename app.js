const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
//connectMongo doesn't work with versions later than @3
const MongoStore = require('connect-mongo')(session);

const passport = require('./passport/setup');
const auth = require('./routes/auth');

const PORT = 5000;

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Express Session
app.use(
    session({
        secret: "this is so secret",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({mongooseConnection: mongoose.connection})
    })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
const itemDBsRoute = require('./routes/ItemDBs');
const shopDBsRoute = require('./routes/shopDBs');
const monsterDBsRoute = require('./routes/monsterDBs');

//initialize routes
app.get('/', (req, res) => res.send("Hey there!"));

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`));
app.use('/api/auth', auth);
app.use('/itemDBs',  itemDBsRoute);
app.use('/shopDBs',  shopDBsRoute);
app.use('/monsterDBs', monsterDBsRoute);

//Connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('Connected to MongoDB')
);