const express = require('express');

const router = express.Router();

router.get('/', (re,res) => {
  res.send('Welcome')
})

module.exports = router;