const { check, validationResult } = require('express-validator');

const errorCheck = 
[
    check('firstName', 'Please enter text').notEmpty(),

    check('lastName', 'Please enter text').notEmpty()
        
    
]

module.exports = {errorCheck};