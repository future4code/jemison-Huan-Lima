import { performPurchase } from "../src/functions/performPurchase"


describe.skip("Teste para valor de usuario", () => {
    
    test("test saldo maior", () => {
        expect(performPurchase({name:'Huan', balance : 25000}, 1000)).toBe(!undefined)
    })
})