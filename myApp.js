require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")

app.use('/public', express.static(__dirname + '/public')) // express static to access public file such css

app.get('/', function (req, res) { // app.METHOD(PATH, HANDLER). Handler is a function with (req, res) param
    res.sendFile(__dirname + "/views/index.html") // HANDLER.res.sendFile will send file from given path as it's param
})

app.get('/', function (req, res) { // app.METHOD(PATH, HANDLER). Handler is a function with (req, res) param
    res.send('Hello Express') // sending the string to '/' directory
})

app.get('/json', function (req, res) { // get a json request to the route '/json'

    let message = "Hello Json";

    if (process.env.MESSAGE_STYLE === 'uppercase') { // take environment variable value to make a logic
        message = message.toUpperCase();
    }

    res.json({
        "message": message // the requested json
    })
})

module.exports = app;
