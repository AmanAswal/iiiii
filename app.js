const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// middleware - app.use is used for middleware
app.use(express.static('public')); // serving static files in public folder

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// import routes
require('./routes')(app);   // passing app

// setting view engine i.e ejs - app.set is used for setting view engine
app.set('view engine', 'ejs');

app.listen(port, (req,res)=>{
    console.log("Server is running on port " + port);
})



