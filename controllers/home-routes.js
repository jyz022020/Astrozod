const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models/User');

router.get('/login', (req, res) => {
    console.log(req);
    // if (req.session.loggedIn) {
    //   res.redirect('/dashboard/');
    //   return;
    // }
    res.render('login');
  });
  
  module.exports = router;