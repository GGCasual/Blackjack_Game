
var emp_deck = [] 
var values = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace']
var suits = ['clubs', 'diamonds', 'spades', 'hearts']
var points = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1]


function getDeck() {

    for (var c = 0; c < values.length; c++) {
        for (var s = 0; s < suits.length; s++){
            var img_card = "Playing Cards/PNG-cards-1.3/" + values[c] + '_of_' + suits[s] + '.png';
            var temp_card = {suits:suits[s], values:values[c], img:img_card, points:points[c]};
            emp_deck.push(temp_card);
        }
    }
    return emp_deck;
}

getDeck();

var dealerHand = []
var playerHand = []


function deal() {

    var card = emp_deck.pop();
    playerHand.push(card);
    var card = emp_deck.pop();
    dealerHand.push(card);
    var card = emp_deck.pop();
    playerHand.push(card);
    var card = emp_deck.pop();
    dealerHand.push(card);

    var playerCard1 = document.createElement('img')
    playerCard1.setAttribute('src', playerHand[0].img)
    playerCard1.setAttribute('class', 'hand')
    var playerCard2 = document.createElement('img')
    playerCard2.setAttribute('src', playerHand[1].img)
    playerCard2.setAttribute('class', 'hand')
    var dealerCard1 = document.createElement('img')
    dealerCard1.setAttribute('src', dealerHand[0].img)
    dealerCard1.setAttribute('class', 'hand')
    var dealerCard2 = document.createElement('img')
    dealerCard2.setAttribute('src', dealerHand[1].img)
    dealerCard2.setAttribute('class', 'hand')

    var playerTable = document.getElementById('player-hand')
    var dealerTable = document.getElementById('dealer-hand')
    playerTable.appendChild(playerCard1)
    playerTable.appendChild(playerCard2)
    dealerTable.appendChild(dealerCard1)
    dealerTable.appendChild(dealerCard2)

}

deal();


function calcPoints() {
    
}





// document.getElementById("deal-button").addEventListener("click", function(){
//     deck.deal()

// });


// document.getElementById("hit-button").addEventListener("click", function(){

// });


// document.getElementById("stand-button").addEventListener("click", function(){

// });
