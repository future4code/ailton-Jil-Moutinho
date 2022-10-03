import { IIdPayload } from "../../src/services/Authenticator";

export class AuthenticatorMock {
  public generateToken = (id: IIdPayload): string => {
    switch (id) {
      case { id: "103" }:
        return "token-mia";
      default:
        return "token-mock";
    }
  };

  public getIdByToken = (token: string): IIdPayload | null => {
    switch (token) {
      case "token-mock":
        const payNormal: IIdPayload = {
          id: "id-mock",
        };
        return payNormal;
      case "token-mia":
        const payMia: IIdPayload = {
          id: "103"
        };
        return payMia;
      default:
        return null;
    }
  };
}
