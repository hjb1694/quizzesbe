import { removeAllListeners } from "nodemon";

export class DBFetchError extends Error {
    constructor(){
        super('DB Fetch Error');
    }
}

export class DBInsertError extends Error {
    constructor(){
        super('DB Insert Error');
    }
}