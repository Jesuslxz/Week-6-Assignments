// Jesus Lozano
//Week 6 unit final project

class Players {
    constructor(name, cards){
        this.name = this.name;
        this.cards = [];
        this.points = 0;

    }
}

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

    shuffle(){

    }
    assignCards(){

    }
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
// let game = new Deck()
// game.createCards
// console.log(game.deck);
