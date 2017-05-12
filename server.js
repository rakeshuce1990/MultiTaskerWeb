(function () {
    'use strict';
}());

var express = require('express'); 
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

//View Engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index' , {
        title: 'MultiTasker: Home'
    });
});

app.get('/terms-of-use', function (req, res) {
    res.render('terms-of-use' , {
        title: 'MultiTasker: Terms Of Use'
    });
});

app.get('/privacy-policy', function (req, res) {
    res.render('privacy-policy' , {
        title: 'MultiTasker: Privacy Policy'
    });
});

var port =  process.env.port || 3000;

app.listen(port, function () {
    
    console.log('MultiTasker running successfully at port: ' + port);
});
