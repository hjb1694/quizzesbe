export default class ResponseError extends Error {

    constructor(error_code, short_msg, body){

        super();

        this.error_code = error_code;
        this.short_msg = short_msg;
        this.body = body;

    }

}