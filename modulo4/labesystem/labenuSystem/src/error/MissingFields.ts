import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
  constructor() {
    super("Missing fields to complet. Be aware that class id and id must be informed as numbers.", 400);
  }
}
