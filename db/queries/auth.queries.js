import knex from '../index.js';
import { DBFetchError, DBInsertError } from '../db_errors.js';


export default class AuthQueries {

    static async checkIfUsernameExists(username){

        try{

            const result = await knex.from('users').count('*').where({username});

            return !!++result[0];

        }catch(e){
            throw new DBFetchError();
        }


    }



    static async checkIfEmailExists(email){

        try{

            const result = await knex.from('users').count('*').whereIn('status', ['active','deactivated_by_admin']).andWhere({email});

            return !!++result[0];

        }catch(e){
            throw new DBFetchError();
        }


    }

    static insertNewUser(email, username, hashedPassword){

        try{

            await knex('users').insert({
                email, username, password: hashedPassword
            });

        }catch(e){

            throw new DBInsertError();

        }

    }

    static fetchUserIdByUsername(username){

        try{

            const result = await knex.from('users').select('id').where({username});

            return result[0];

        }catch(e){

            throw new DBFetchError();

        }

    }

}
