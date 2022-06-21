import { body } from 'express-validator';
import validationResult from '../validationResult.js';

export default [
    [
        body('email', 'Please include an email address.').notEmpty(), 
        body('password', 'Please include a password').notEmpty()
    ], 
    validationResult
]