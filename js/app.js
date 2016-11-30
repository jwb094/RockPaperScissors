document.addEventListener('DOMContentLoaded' , function(){
   
let whoWonTheBattle = [
             //(C)Rock Paper Scissors
/*(P)rock */ ['D','C','P'],
/*Paper */   ['P','D','C'],
/*Scissors*/ ['C','P','D']
];

//Player score and computer score which starts at zero
let playerScoreCount = 0;
let computerScoreCount = 0;

//global variable for playerChoice & computerChoiceOption
let playerOption;
let computerOption;
let result;
//rock button
$( ".rbutton" ).click(function() {
    playerChoice = 0;
    let computerchoice = [Math.floor(Math.random() * whoWonTheBattle.length)];    
    computerOption  = computerchoice;
    let result = whoWonTheBattle[playerChoice][computerOption];
    TheWinner(result);
});
//paper button
$( ".pbutton" ).click(function() {
    playerChoice = 1;
    let computerchoice = [Math.floor(Math.random() * whoWonTheBattle.length)];    
    computerOption  = computerchoice;
    let result = whoWonTheBattle[playerChoice][computerOption];
    TheWinner(result);
});
//Scissors button
$( ".sbutton" ).click(function() {
    playerChoice = 2;//assign number 2 = Scissors to global variable playerChoice
    let computerchoice = [Math.floor(Math.random() * whoWonTheBattle.length)];   //random generate choice for computer 
    computerOption  = computerchoice; // passed to global variable computerOption
    let result = whoWonTheBattle[playerChoice][computerOption];//the global variable cuse both players move to calculate the final position in the matrix
    TheWinner(result);//function TheWinner is called to perform the tasks who won and who loss
});
function TheWinner (theOutcome){
        this.theOutcome = result;
        theOutcome === "P" ? $( "#resultmessage" ).html("Player wins") && $( "#Playercount").html(playerScoreCount++) ://if the Outcome is "P" = Player wins 
        theOutcome === "C" ? $( "#resultmessage" ).html("Computer wins") && $( "#Computercount").html(computerScoreCount++): //if the Outcome is "C" = Computer wins 
         $("#resultmessage" ).text("It's a draw!");    //if the Outcome is "D" = It's a draw 
    }
});