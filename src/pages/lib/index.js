const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressSession({secret:"mysecretkey", resave:false, saveUninitialised:false}));

app.use(cors,({
    origin:" http://localhost:3000",
    credentials: true,
}))

app.use(cookieParser('mysecretkey'));

app.use(passport.initialize())
app.use(passport.session());
require('./passportConfig')(passport);

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(3001, ()=>{
    console.log("server started on port 3001");
})