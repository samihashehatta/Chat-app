const expect =require('expect');
const {genMsg}=require('../helpers/msg');

describe('genMsg',()=>{
    it('should generate correct message object',()=>{
        let from ='bassem';
        let text = 'some ekkdmkd';
        let message = genMsg(from,text);

        expect(typeof message.createsAt).toBe('number');
        expect(message).toMatchObject({from, text});
    })
})