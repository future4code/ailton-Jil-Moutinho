import { BaseError } from "./BaseError";

export class TokenNotPass extends BaseError{
    constructor(){
        super("O token deve ser passado",404)
    }
}