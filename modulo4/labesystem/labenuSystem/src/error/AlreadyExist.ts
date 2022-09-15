import { BaseError } from "./BaseError";

export class AlreadyExist extends BaseError {
  constructor() {
    super("Data already submited. Check the e-mail or name ou provided.", 401);
  }
}
