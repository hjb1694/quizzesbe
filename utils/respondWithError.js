import ResponseError from "./ResponseError.js";

export default function(res, e){

    if(e instanceof ResponseError){

        return res.status(e.error_code).json(e);

    }else{
        
        return res.status(500).json({
            short_msg: 'SERVER_ERR', 
            body: {
                msg: 'A server error has occurred.'
            }
        });

    }

}