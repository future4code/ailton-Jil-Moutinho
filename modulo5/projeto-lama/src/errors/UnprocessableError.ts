import { BaseError } from "./BaseError";

export class UnprocessableError extends BaseError {
    constructor(
        message: string = "Valid parameters. But something went wrong" 
    ) {
        super(422, message)
    }
}