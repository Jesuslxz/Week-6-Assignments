var expect = chai.expect;

describe('MyFunctions', function(){
    describe('#shuffle', function(){
        it('should shuffle the deck in a randomized order', function(){
            const testDeck = new Deck();
            //let currentDeck = testDeck.deck;
            
           // let shuffledDeck = testDeck.shuffle();
       
            expect(testDeck.deck[0]).to.not.equal(testDeck.shuffle()[0]);

        });
    });
});