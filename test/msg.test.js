const expect =require('expect');
const {genMsg,genLocation}=require('../helpers/msg');

describe('genMsg',()=>{
    it('should generate correct message object',()=>{
        let from ='bassem';
        let text = 'some ekkdmkd';
        let message = genMsg(from,text);

        expect(typeof message.createsAt).toBe('number');
        expect(message).toMatchObject({from, text});
    })
})


describe('genLocation',()=>{
    it('should generate correct location object',()=>{
        let from='den',
        lat=13,
        lon=22,
        url="https://www.google.com/maps?q=13,22"
        message=genLocation(from,lat,lon);

        expect(typeof message.createsAt).toBe('number');
        expect(message).toMatchObject({from, url});


    
    })
})