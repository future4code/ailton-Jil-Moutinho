export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        switch(plaintext) {
            case "asdfg123":
                return "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i"
            default:
                return "hash-mock"
        }
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean>  => {
        switch(plaintext) {
            case "asdfg123":
                return hash === "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i"
            default:
                return false
        }
    }
}
