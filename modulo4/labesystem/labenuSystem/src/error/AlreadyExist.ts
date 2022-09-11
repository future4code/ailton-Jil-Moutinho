import { BaseError } from "./BaseError";

export class AlreadyExist extends BaseError {
  constructor() {
    super("Data already submited. Check you e-mail or name", 401);
  }
}
