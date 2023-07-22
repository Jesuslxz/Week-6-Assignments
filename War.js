// Jesus Lozano
//Week 6 unit final project

//Properties of each player
class Players {
    constructor(name){
        this.name = name;
        this.cards = [];
        this.points = 0;
    }
}
//instantiate two players with their names
const playerOne = new Players("Amy");
const playerTwo = new Players('Sam');


//properties of each card
class Card {
    constructor(value, rank, type){
        this.value = value;
        this.rank = rank;
        this.type = type;
    }
}

class Deck{
    constructor(){
        this.deck = [];
        this.createCards();
        this.shuffle();
        this.assignCards();
    }
    //shuffles the deck unless there are no cards in the deck
    shuffle(){
        if (this.deck.length > 0) {
            this.deck.sort((a, b) => Math.random() - 0.5 )
        }
    }
    //assigns the cards to each player for 26 for each total
    assignCards(){
        playerOne.cards = this.deck.slice(0,26);
        playerTwo.cards = this.deck.slice(26,52);
    }
    //instantiates each card object by giving its type, rank and value associated with it
    createCards(){
        const type = ['Spade', 'Heart', 'Clover', 'Diamond' ];
        const rank = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        const value =  [1,2,3,4,5,6,7,8,9,10,11,12,13];
        for (let i = 0; i < type.length;i++){
            for (let j = 0; j < value.length;j++)
                this.deck.push( new Card(value[j],rank[j],type[i] ))
            }
    }
}

class War{
    constructor(){
    }
    playRound(){
        for( let i=0; i < playerOne.cards.length; i++){
            if (playerOne.cards[i].value > playerTwo.cards[i].value){
                playerOne.points++;
            }
            else if ( playerOne.cards[i].value < playerTwo.cards[i].value){
                playerTwo.points++;
            }  
            
        }
    }
    //method for console logging the winner by comaparing scores and displaying results
    displayWinner(){
        if (playerOne.points > playerTwo.points){
            console.log(`
            --------------------------------------
            Winner ${playerOne.name} is the Winner! 
            ${playerOne.points} to ${playerTwo.points}
            --------------------------------------
            `)
        }
        else if (playerOne.points < playerTwo.points){
            console.log(`
                --------------------------------------
                Winner ${playerTwo.name} is the Winner! 
                ${playerOne.points} to ${playerTwo.points}
                --------------------------------------
                `)
        }
        else{
            console.log(`
                --------------------------------------
                There is a tie! score being
                ${playerOne.points} to ${playerTwo.points}
                nobody wins!
                --------------------------------------
                `)
        }
     
    }
}
const Game = new War();
const deck = new Deck();
Game.playRound();
Game.displayWinner()

