import AuthQueries from "../db/queries/auth.queries.js";
import respondWithError from "../utils/respondWithError.js";
import bcrypt from 'bcryptjs';
import genToken from "../utils/genToken.js";
import ResponseError from "../utils/ResponseError.js";

export const register = async (req,res) => {

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


export const login = async (req,res) => {

    try{

        const {email, password} = req.body;

        const user = await AuthQueries.fetchLoginCredentialsByEmail(email);

        console.log(user);

        if(!user){
            throw new ResponseError(404, 'ERR_USR_NOT_FOUND', {msg: 'User not found'});
        }

        if(user.status !== 'active'){
            throw new ResponseError(404, 'ERR_DEACTIVATED', {msg: 'This account is no longer active'});
        }

        const matches = bcrypt.compareSync(password, user.password);

        if(!matches){
            throw new ResponseError(403, 'ERR_INVALID_CREDENTIALS', {msg: 'Invalid credentials'});
        }

        const token = await genToken(user.id);

        res.status(201).json({
            short_msg: 'SUCCESS', 
            body: {
                user_id: user.id, 
                token
            }
        });


    }catch(e){

        console.error(e);
        return respondWithError(res,e);

    }


}