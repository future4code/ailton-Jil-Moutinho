import { BaseError } from "./BaseError";

export class ModuloNotPermit extends BaseError{
    constructor(){
        super("Module must be a number from 0 to 6",401)
    }
}