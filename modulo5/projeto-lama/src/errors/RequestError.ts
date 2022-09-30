import { BaseError } from "./BaseError";

export class RequestError extends BaseError {
    constructor(
        message: string = "Invalid requisition"
    ) {
        super(400, message)
    }
}