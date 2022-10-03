import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {
    constructor(
        message: string = "Resource already exists" 
    ) {
        super(409, message)
    }
}