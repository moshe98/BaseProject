

var express= require('express');
var path = require('path');
var bodyparser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var stocks = require('./routes/stocks');

var port = 3000;
var app = express();

//Views engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname,'client')));


//bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);
app.use('/api',stocks);

app.listen(port,function(){console.log("server listening on port: " + port)});