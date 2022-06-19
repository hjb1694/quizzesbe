import AuthQueries from "../db/queries/auth.queries.js";
import respondWithError from "../utils/respondWithError.js";
import bcrypt from 'bcryptjs';
import genToken from "../utils/genToken.js";

export const register = (req,res) => {

    try{

        const {
            email, 
            username, 
            password
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 8);

        await AuthQueries.insertNewUser(email, username, hashedPassword);

        const userId = await AuthQueries.fetchUserIdByUsername(username);

        const token = await genToken(userId);

        res.status(201).json({
            short_msg: 'SUCCESS', 
            body: {
                user_id: userId, 
                token
            }
        });


    }catch(e){
        console.error(e);
        return respondWithError(res, e);
    }
    


}