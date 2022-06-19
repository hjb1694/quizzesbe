import respondWithError from "../utils/respondWithError.js";
import ResponseError from "../utils/ResponseError.js";

export const register = (req,res) => {

    try{

        const {
            email, 
            username, 
            password
        } = req.body;

        



    }catch(e){
        console.error(e);
        return respondWithError(res, e);
    }
    


}