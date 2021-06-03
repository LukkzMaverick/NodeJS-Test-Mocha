import chai from 'chai'
import Calculator from '../src/Calculator'
const expect = chai.expect

describe('Calculator class', () => {
    let calculator = null
    beforeEach(() => {
        calculator = new Calculator
    })
    it('(SUM) expect 5 + 4 = 9', () => {
        const result = calculator.sum(5,4)
        expect(result).to.equal(9)
        expect(result).to.be.an('number')
    })
    it('(MINUS) expect 3 - 7 = -4', () => {
        const result = calculator.minus(3,7)
        expect(result).to.equal(-4)
        expect(result).to.be.an('number')
    })
    it('(MULT) expect 3 * 7 = 21', () => {
        const result = calculator.mult(3,7)
        expect(result).to.equal(21)
        expect(result).to.be.an('number')
    })
    it('(DIV) expect 100 / 10 = 10', () => {
        const result = calculator.div(100,10)
        expect(result).to.equal(10)
        expect(result).to.be.an('number')
        expect(result).not.equal(100)
    })
})