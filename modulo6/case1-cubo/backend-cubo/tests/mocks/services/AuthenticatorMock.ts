
export class AuthenticatorMock {
    generateToken = (id: string): string => {
        switch(id) {
            case "101":
                return "token-astrodev"
            default:
                return "token-mock"
        }
    }

/*     getTokenPayload = (token: string): string | null => {
        switch(token) {
            case "token-mock":
                return id: "id-mock";                
            case "token-astrodev":
                return id: "101";                
            default:
                return null
        }
    }; */
    //item q retornar um type só com id?
    
}