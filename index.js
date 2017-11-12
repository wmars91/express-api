const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

app.use('/api',router);

app.listen('5000', function(){
    console.log('Server Express Dijalankan')
});

