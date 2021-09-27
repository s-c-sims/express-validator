const { check, validationResult } = require('express-validator');

const errorCheck = 
[
    check('firstName', 'Please enter first name').notEmpty(),

    check('lastName', 'Please enter last name').notEmpty(),

    check('email', 'Please enter valid email').isEmail(),

    check('password', 'Password must contain at least 5 characters').isLength({min: 5})

        
]

module.exports = {errorCheck};