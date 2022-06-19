import express from "express";

import registrationValidation from '../middleware/validation/validators/register.validator.js';
import {
    register as registrationController 
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post(
    '/register',
    registrationValidation, 
    registrationController
);

router.post('/login');

export default router;