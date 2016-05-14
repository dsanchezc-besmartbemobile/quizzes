var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
console.log(5 + 6);
  res.render('author', { title: 'Autores' });
});

module.exports = router;
