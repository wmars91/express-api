const express = require('express');
const router = express.Router();


const users = [
    {name: "Yudi", age:"26" },
    {name: "Yeyen", age:"26"}
]

router.get('/users',function(req, res){
    res.send(users);
});

router.get('/users/:id',function(req, res){
    res.send(users[0]);
});

router.post('/users',function(req, res){
    res.send(req);
});

module.exports = router;