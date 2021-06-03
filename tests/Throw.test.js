import chai from 'chai';
import chaiHttp from 'chai-http'
import server from '../src/index.js'
const should = chai.should
chai.use(chaiHttp)

function ThrowError(){
    return new Error('Throw Error')
}

describe('ThrowError', () => {
    it('Should throw new Error', () => {
        const err = ThrowError()
        err.should.be.an.instanceOf(Error)
    })

    it('Should return a 500 error from server', (done) => {
        chai.request(server).post('/error').end((err, res) => {
            res.should.have.status(500)
            res.body.should.have.property('msg')
            res.body.should.have.property('error')
            res.body.msg.should.eql('Internal Server Error')
            done()
        })
    })
})