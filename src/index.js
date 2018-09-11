const express = require ('express')
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/bands'))

//Start
app.listen(app.get ('3000'),()=>{
    console.log('Server on port', app.get('port'));
    
})