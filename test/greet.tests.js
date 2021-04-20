
describe('Test my greet function' , function(){
    it("It should return 'hello, Nathi' when called with 'Nathi' " , function(){
        assert.equal("Hello ,Nathi", greet("Nathi"), "this should not be true");
    });

    it("It should return 'hello, Sizwe' when called with 'Sizwe' ", function(){
        assert.equal("Hello ,Sizwe", greet("Sizwe"), "this should not be true");
    });
    
});