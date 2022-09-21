import { BaseError } from "./BaseError";

export class AlreadyFollow extends BaseError {
  constructor() {
    super("User already follow this profile.", 401);
  }
}