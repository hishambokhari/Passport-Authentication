const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (re,res) => {
  res.render('login')
})

//Register Page
router.get('/register', (re,res) => {
  res.render('register')
})

module.exports = router;