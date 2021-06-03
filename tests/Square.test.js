import chai from 'chai'
import { before } from 'mocha';
import Square from '../src/Square.js'
chai.should();

describe('Square', () => {
    let square
    beforeEach(()=>{
        square = new Square(10)
    })
    // before(()=>{
    //     console.log('antes de tudo')
    // })
    it('returns value', () => {
        square.value.should.equal(10)
    })

    it('getArea is equal 100', () => {
        square.getArea().should.equal(100)
    })
})