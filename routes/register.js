var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var validator = require('../util/validation');

router.get('/', function(req, res, next) 
{
    res.render('register', { title: 'Register' });
    
});

router.post('/submit', validator.errorCheck, function(req, res, next) 
{


    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(422).jsonp(errors.array())
    else res.send('Success!');
    
    
});
module.exports = router;


