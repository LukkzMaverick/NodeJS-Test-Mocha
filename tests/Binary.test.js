import chai from 'chai'
import chaiHttp from 'chai-http'

import server from './../src/index'

chai.use(chaiHttp)
const should = chai.should()

describe('Binary API', () => {
    it('should return a binary value based on decimal value', (done) => {
       chai.request(server).post('/binary') 
       .send({number: 100})
       .end((err, res) =>{
           res.should.have.status(200)
           res.body.should.be.a('object')
           res.body.should.have.property('number').eql('1100100')
           done()
       })
    })
})