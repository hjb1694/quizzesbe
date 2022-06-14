import { body } from "express-validator";
import validationResult from "../validationResult.js";
import stringLength from "string-length";

export default [
    [
        body('email', 'Please include a valid email address.').notEmpty(), 
        body('username', 'Please include a username.').notEmpty(), 
        body('password', 'Please include a password').notEmpty()
    ], 
    validationResult, 
    [
        body('email', 'Please enter a valid email address.').isEmail(), 
        body('username').custom(value => {

            const userNameRegs = {
                alpha: /[A-Z]/i, 
                alphaNumeric: /^[A-Z0-9]{6,15}$/i
            }

            if(
                !userNameRegs.alpha.test(value) || 
                !userNameRegs.alphaNumeric.test(value)
            ){
                throw new Error("Invalid username criteria.");
            }

            return true;
        }),
        body('password').custom(value => {

            const passwordRegs = {
                uppercase: /[A-Z]/, 
                lowercase: /[a-z]/, 
                numeric: /[0-9]/
            }

            if(
                !passwordRegs.uppercase.test(value) || 
                !passwordRegs.lowercase.test(value) ||
                !passwordRegs.numeric.test(value) ||
                stringLength(value) < 8 ||
                stringLength(value) > 25
            ){

                throw new Error("Invalid password criteria.");

            }

            return true;
        })
    ], 
    validationResult, 
    [
        
    ]

];