import { PingBusiness } from "../../src/business/PingBusiness"

describe("Testing PingBusiness", () => {
    const pingBusiness = new PingBusiness()
    
    test("Return 'Pong!' if success!", async () => {
        const response = await pingBusiness.ping()
        expect(response.message).toBe("Pong!")
    })
})