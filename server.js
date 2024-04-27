require('dotenv').config();
const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const session = require('express-session');
const cors = require('cors');

const sessionOptions = session({
   secret: process.env.SESSIONSECRETE,
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000*60*60*24*1,
      httpOnly: true
   }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessionOptions);

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(routes);

app.listen(process.env.PORT);

