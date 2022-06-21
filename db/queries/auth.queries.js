import knex from '../index.js';
import { DBFetchError, DBInsertError } from '../db_errors.js';


export default class AuthQueries {

    static async checkIfUsernameExists(username){

        try{

            const result = await knex.from('users').count('*').where({username});

            return !!++result[0];

        }catch(e){
            console.error(e);
            throw new DBFetchError();
        }


    }



    static async checkIfEmailExists(email){

        try{

            const result = await knex.from('users').count('*').whereIn('status', ['active','deactivated_by_admin']).andWhere({email});

            return !!++result[0];

        }catch(e){
            console.error(e);
            throw new DBFetchError();
        }


    }

    static async insertNewUser(email, username, hashedPassword){

        try{

            await knex('users').insert({
                email, 
                username, 
                password: hashedPassword, 
                status: 'active'
            });

        }catch(e){

            console.error(e);
            throw new DBInsertError();

        }

    }

    static async fetchUserIdByUsername(username){

        try{

            const result = await knex.from('users').select('id').where({username});

            return result[0];

        }catch(e){

            console.error(e);
            throw new DBFetchError();

        }

    }


    static async fetchLoginCredentialsByEmail(email){

        try{

            const result = await knex.from('users').where({email}).select('*').orderBy('id','desc').limit(1);

            return result[0];

        }catch(e){
            console.error(e);
            throw new DBFetchError();
        }


    }

}
