import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("esta faltando parametros",404)
    }
}