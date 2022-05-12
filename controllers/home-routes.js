const ho = require('../utils/horoscope');
const userSign = ho.getUserSign(5,12);
const userAnimalSign =ho.getUserAnimal(2000);

console.log(userSign);
console.log(userAnimalSign);
ho.getPrediction(userSign);

const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models/User');

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;