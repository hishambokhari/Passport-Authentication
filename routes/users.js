const express = require('express');
const router = express.Router();

//Login Page
router.get('/login', (re,res) => {
  res.send('Login')
})

//Register Page
router.get('/register', (re,res) => {
  res.send('Register')
})

module.exports = router;