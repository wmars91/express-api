const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('latihan', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const users = sequelize.define('users_dws', {
    username:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    age:{
        type: Sequelize.INTEGER
    }
});

router.get('/users',function(req, res){
    users.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] }
    }).then(function(users_){
        res.send(users_);
    });
});

router.get('/users/:id',function(req, res){
    const {id} = req.params;
    users.findAll({
        where: {
            id: id
        }
    }).then(function(users_){
        res.send(users_);
    });
});     

router.post('/users',function(req, res){
    // res.send(req);
    users.create({req}).then(function(user){
        ressend(user);
    });
});

module.exports = router;