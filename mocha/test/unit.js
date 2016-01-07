import {add} from '../src/add'
import chai from 'chai'

let expect = chai.expect

describe('add', function() {
    it('2 + 3 = 5', function() {
        expect(add(2, 3)).to.be.equal(5)
    })
})