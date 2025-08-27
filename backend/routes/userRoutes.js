const express = require('express');
const router = express.Router();

const {body} = require('express-validator')
const userController = require('../controllers/userController')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.password').isLength({min:5}).withMessage('Password must be at least 6 character long'),


],
userController.registerUser )

module.exports = router;