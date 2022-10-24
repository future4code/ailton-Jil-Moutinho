import { BaseError } from "./BaseError";

export class UserDoesntExist extends BaseError{
    constructor(){
        super("The is no user with this id",404)
    }
}