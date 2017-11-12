const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.use('/api',router);

app.listen('5000', function(){
    console.log('Server Express Dijalankan')
});

