const {verifyEmail} = require('../../app.js')

describe('Fonction verifyEmail', ()=>{
    it("should return true if email contains '@'",()=>{
        expect(verifyEmail('osm@osm.osm')).toBe(true)
    })
    it("should return false if email does not contain '@'",()=>{
        expect(verifyEmail('osmosmosm')).toBe(false)
    })
})