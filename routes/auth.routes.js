import express from "express";

import registrationValidation from '../middleware/validation/validators/register.validator.js';
import loginValidation from '../middleware/validation/validators/login.validator.js';
import {
    register as registrationController, 
    login as loginController
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post(
    '/register',
    registrationValidation, 
    registrationController
);

router.post(
    '/login', 
    loginValidation, 
    loginController
);

export default router;