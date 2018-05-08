//require needed packages
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

// Data
var resos = [{
    name: "Mom",
    number: "1234",
    email: "mom@hotmail.com",
    id: 1
}, {
    name: "Dad",
    number: "5678",
    email: "dad@hotmail.com",
    id: 2
}, {
    name: "Sister",
    number: "3456",
    email: "sister@hotmail.com",
    id: 3
}];       

var waitlist = [];

//routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});

//api route
app.get('/api/tables', function (req, res) {
    return res.json(resos);
});