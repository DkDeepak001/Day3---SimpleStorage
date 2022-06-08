const SimpleStorage = artifacts.require('./SimpleStorage.sol');

contract('SimpleStorage', ()=>{
    it('Should set the value', async () =>{
        const simpleStorage = await SimpleStorage.deployed();

        await simpleStorage.set('this');
        const result =await simpleStorage.get();
        assert(result === 'this');
    });
});