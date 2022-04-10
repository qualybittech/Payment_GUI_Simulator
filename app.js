var express = require('express');
const { body, validationResult } = require('express-validator');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.post('/payment_Process',body('amount').isLength({min:1}) , function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var amount = req.body.amount;
    var mobilenumber =  req.body.mobilenumber;
    var option =req.body.option;
    res.send('amount: '+amount +'mobilenumber: '+mobilenumber + ' Selected option  '+option);
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});