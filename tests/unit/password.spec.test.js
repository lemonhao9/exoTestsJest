const {verifyPassword} = require('../../app.js')

describe('Fonction verifyPassword', ()=>{
    it ("should return true if password length is greater than or equal to 8",()=>{
        expect(verifyPassword('12345678')).toBe(true)
    })
    it ("should return false if password length is less than 8",()=>{
        expect(verifyPassword('1234567')).toBe(false)
    })
})
