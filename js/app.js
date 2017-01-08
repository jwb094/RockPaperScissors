 document.addEventListener('DOMContentLoaded' , function(){

      //Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and COmputer ; Row then Column
  let whoWonTheBattle = [
               //(C)Rock Paper Scissors
  /*(P)rock */ ['D','C','P'],
 /*Paper */   ['P','D','C'],
 /*Scissors*/ ['C','P','D']
 ];

 let playerScoreCount = 0;
  let computerScoreCount = 0;

  //global variable for computerOption / playerOption / the result
  let computerOption;
 let playerOption;
  let result;

  let theButtons = $('.move-buttons div');
 
     //A function that find a id from the clicked  button in the group of button in  .move-buttons div
     theButtons.each(function (i, button){
         $(button).click(function (event){
             playerOption = event.target.id;
            getPositions();
         });
     });
 
     // A function that get the Player & Computer' moves 
     function getPositions(){
         this.PlayerMove = playerOption;
         this.ComputerMove = [Math.floor(Math.random() * whoWonTheBattle.length)];
        getFinalPosition();
      }
 
     // A function that calculate the final position in the Matrix 
     function getFinalPosition(){
         let result = whoWonTheBattle[PlayerMove][ComputerMove];
         TheWinner(result);
     }
 
     //A function that perform actions if the Player wins
     function PlayerOutput(){
        $("#resultmessage" ).html("Player wins");
         playerScoreCount++;
         let theScore = document.getElementById("playerCount").innerHTML = playerScoreCount;
     }
     //A function that perform actions if the Computer wins
     function ComputerOutput(){
         $("#resultmessage").html("Computer wins");
         computerScoreCount++;
        let theScore = document.getElementById("computerCount").innerHTML = computerScoreCount;
     }
 
    // A function that calculate the Winner by the position in the matrix
     function TheWinner (theOutcome){
 
             //if Outcome = "P" Player wins    if Outcome = "C" Computer wins      
            this.theOutcome = result; theOutcome === "P" ? PlayerOutput(): theOutcome === "C" ? ComputerOutput():
            $("#resultmessage" ).text("It's a draw!");    
         }
  }); 