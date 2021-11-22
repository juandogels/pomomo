# Readme/Instructions
The API we created for our deprecated game, POMOMO

**Introduction**
This repository contains simple login + registration logic created with EJS which includes authentication methods using Passport.js as well as encryption using Bcrypt.js. It also includes database modelling used for our game logic.

**Get started**
Since we haven't deployed our code to a live website, it needs to be done locally first. To get started, clone our repository and head over to the repository. 

NOTE: We're using MongoDB for our database cluster. We've deployed our cluster using MongoDB Atlas (free, shared). Since this is just a test cluster, you may have
access to the connection string to connect to our database either by using MongoDB Shell or by using MongoDB Compass (an interactive GUI used to interact with MongoDB): 
```
mongodb+srv://pomomoUser:pomomoUser@cluster0.mx7yo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
```
git clone https://github.com/juandogels/pomomo_api.git
cd pomomo_api
```
NOTE: You must have installed Node.js and NPM in order to run our code. Some of the prerequisites may be required in order to run the project without errors. Normally,
```
npm install
```
should work. However, in the off chance that some packages aren't installed properly, here are a list of the packages we've used in this code.
```
    "bcrypt-nodejs": "0.0.3",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "connect-mongo": "^3.2.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^8.6.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "mongoose": "^5.12.9",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.7",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^6.1.0",
    "pusher": "^5.0.0"
```

Then, run: 
```
npm start app.js
```

Alternatively, you can run:
```
nodemon app.js
```
The console should now log the process and something like this should return (ignore deprecation messages):
```
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
body-parser deprecated bodyParser: use individual json/urlencoded middlewares app.js:23:9
body-parser deprecated undefined extended: provide extended option node_modules\body-parser\index.js:105:29
Backend listening to port 8080                                                                          
[nodemon] restarting due to changes...
[nodemon] starting `node app.js app.js`
body-parser deprecated bodyParser: use individual json/urlencoded middlewares app.js:23:9
body-parser deprecated undefined extended: provide extended option node_modules\body-parser\index.js:105:29   
Backend listening to port 8080
```
Open `localhost:8080` and you should see our EJS pages working. Try login using a random email and a password. It should say "No user found".
We keep track of usernames and passwords in our database cluster. Try signing up using a random email and password and now login using the same email and password that you used
to sign up. It should now work and redirect you to a blank page, which is actually our `profile.ejs` that is still empty.

To interact with our database models, you can use Postman (https://www.postman.com/), which is an API platform used for building and using APIs. There are several tutorials that teaches you how to use it, and you can access our database routing that we created to do a CRUD operation.


