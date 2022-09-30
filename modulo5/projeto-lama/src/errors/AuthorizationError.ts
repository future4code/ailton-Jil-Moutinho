import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
    constructor(
        message: string = "Insuficient permission" 
    ) {
        super(403, message)
    }
}