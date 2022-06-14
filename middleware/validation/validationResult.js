import { validationResult } from "express-validator";

export default function(req,res,next) {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            status: "error", 
            short_text: "ERR_VALIDATION",
            body: {
                errors: errors.array()
            }
        });
    }

    next();

}