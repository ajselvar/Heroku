var express = require ("express");
var bodyParser = require ("body-parser");

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.status(200).send("Hey Yo");
});

app.post('/hello', function(req, res, next) {
    var username = req.body.user_name;
    var botPayload = {
        text: 'Hello ' + username + " Have a nice day:) "
    };

    if(username !== 'slackbot'){
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});

app.listen(port, function() {
    console.log("Started Listening");
});