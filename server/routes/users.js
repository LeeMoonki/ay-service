var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.pool.query('SELECT * FROM examplelists;', (err, results, fields) => {
    console.log('db connection test : ', err, results);
  })
  res.send('respond with a resource');
});

module.exports = router;
