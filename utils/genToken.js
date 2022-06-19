import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../config/index.js';

const signToken = promisify(jwt.sign);

export default async function genToken(userId){

    try{

        const tok = await signToken({userId}, config.jwt_secret);

        return tok;

    }catch(e){

        throw new Error('token sign error.');

    }



}