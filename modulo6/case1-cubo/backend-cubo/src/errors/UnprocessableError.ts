import { BaseError } from "./BaseError";

export class UnprocessableError extends BaseError {
    constructor(
        message: string = "Your data is valid but unprocessable" 
    ) {
        super(422, message)
    }
}