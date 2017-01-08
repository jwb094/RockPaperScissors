// when the window load it will create a new instance of RPS
$(() => window.onload = new RPS());

class RPS {
    constructor() {
        //Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and COmputer ; Row then Column
        this.whoWonTheBattle = [
            //(Computer)Rock Paper Scissors
       /*(Player)rock */['D', 'C', 'P'],
              /*Paper */['P', 'D', 'C'],
            /*Scissors*/['C', 'P', 'D']
        ];
        //this will store the player and computer options
        this.playerOption;
        this.computerOption;

        //store the matrix array position
        this.result;

        // the PLayer & Computer score count | The resultmessage element
        this.message = $("#resultmessage");
        this.playerScore = $("#playerCount");
        this.computerScore = $("#computerCount");

        // the PLayer & Computer score count 
        this.playerScoreCount=0;
        this.computerScoreCount=0;
        //the div element containing the images
        this.theButtons = $('.move-buttons div');

        // function for the button event listeners from the front end
        this.ButtonEventListener();
    }
    //A function that find a id from the clicked  button in the group of button in  .move-buttons div
    ButtonEventListener() {
        this.theButtons.each((i, button) => $(button).click(this.gameflow.bind(this)));
    }
    //the game function flow how the game is played
    gameflow() {
        this.getPositions();
        this.getFinalMatrixPosition();
        this.outcome();
        this.ScoreUpdate();
    }
    //this function retrieve teh player and computer choice
    getPositions() {
        this.playerOption = event.target.id;
        this.computerOption = [Math.floor(Math.random() * this.whoWonTheBattle.length)];
    }
    //the Matrix positionis found using the player and computer choices
    getFinalMatrixPosition(){
        this.result = this.whoWonTheBattle[this.playerOption][this.computerOption];
    }
    //the winner is found
    outcome(){
        this.theOutcome = this.result; 
        this.theOutcome === "P" ? $(this.message).html("Player wins"): 
        this.theOutcome === "C" ? $(this.message).html("Computer wins") : 
            $(this.message).html("Its a draw");   
    }
    //the winner's score is update
    ScoreUpdate(){
        this.winner = this.result;
         this.winner === "P" ? this.playerScore.html(this.playerScoreCount++):
         this.winner === "C" ? this.computerScore.html(this.computerScoreCount++):
         $(this.message).html("Its a draw");   

    }
}/*
-document.addEventListener('DOMContentLoaded' , function(){
 +$(() => window.rps = new RockPaperScissors());
  
 -//Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and COmputer ; Row then Column
 -let whoWonTheBattle = [
 +
 +class RPS {
 +    constructor(){
 +        //Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and COmputer ; Row then Column
 +        this.whoWonTheBattle = [
               //(C)Rock Paper Scissors
 -/*(P)rock */ ['D','C','P'],
 -/*Paper */   ['P','D','C'],
 -/*Scissors*/ ['C','P','D']
 -];
 +            /*(P)rock */ ['D','C','P'],
 +            /*Paper */   ['P','D','C'],
 +            /*Scissors*/ ['C','P','D']
 +        ];
 +        
 +        //global variable for computerOption / playerOption / the result
 +        this.playerOption;
 +        this.computerOption;
 +
 +        // the result message element from the front end
 +        this.message = $("#resultmessage");
 +
 +        this.theButtons = $('.move-buttons div');
 +
 +    }
 +
 +
 +}
 +
  
  //Player score and computer score which starts at zero
  let playerScoreCount = 0;
  let computerScoreCount = 0;
  
  //global variable for computerOption / playerOption / the result
 -let computerOption;
 -let playerOption;
  let result;
 -let theButtons = $('.move-buttons div');
 +
  
      //A function that find a id from the clicked  button in the group of button in  .move-buttons div
      theButtons.each(function (i, button){
 @@ -35,27 +51,28 @@
 
     // A function that calculate the final position in the Matrix 
     function getFinalPosition(){
         let result = whoWonTheBattle[PlayerMove][ComputerMove];
         TheWinner(result);
     }
 
     //A function that perform actions if the Player wins
     function PlayerOutput(){
         $("#resultmessage" ).html("Player wins");
         playerScoreCount++;
         let theScore = document.getElementById("Playercount").innerHTML = playerScoreCount;
     }
     //A function that perform actions if the Computer wins
     function ComputerOutput(){
         $("#resultmessage").html("Computer wins");
         computerScoreCount++;
         let theScore = document.getElementById("Computercount").innerHTML = computerScoreCount;
     }
 
      // A function that calculate the Winner by the position in the matrix
      function TheWinner (theOutcome){
              //if Outcome = "P" Player wins    if Outcome = "C" Computer wins          
             this.theOutcome = result; theOutcome === "P" ? PlayerOutput(): theOutcome === "C" ? ComputerOutput():
             this.theOutcome = result; 
             theOutcome === "P" ? PlayerOutput(): theOutcome === "C" ? ComputerOutput():
              $("#resultmessage" ).text("It's a draw!");    
          }
  }); 
 */