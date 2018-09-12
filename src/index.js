const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const musicRoutes = ('./routes/music');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'nodemysql'
}, 'single'))
app.use(urlencoded({extend:false}))

//Routes
app.use('/', musicRoutes);

app.use(express.static(path.join(__dirname, 'public')));

//Start Server

app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
})