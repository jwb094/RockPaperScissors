$(() => window.rps = new RPS());


class RPS {
    constructor(){
        //Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and COmputer ; Row then Column
        this.whoWonTheBattle = [
             //(C)Rock Paper Scissors
            /*(P)rock */ ['D','C','P'],
            /*Paper */   ['P','D','C'],
            /*Scissors*/ ['C','P','D']
        ];
        
        //global variable for computerOption / playerOption / the result
        this.playerOption;
        this.computerOption;

        //global variable for computerOption / playerOption / the result
        this.playerScoreCount = 0;
        this.computerScoreCount = 0;
        this.result;

        // the result message element from the front end
        this.message = $("#resultmessage");

        this.theButtons = $('.move-buttons div');
        console.log(this.theButtons);  

        // Run the object prototype function to add event listeners to the DOM elements above
        this.ButtonEventListener();
    }
        //A function that find a id from the clicked  button in the group of button in  .move-buttons div
        ButtonEventListener() {
        this.theButtons.each((i, button) => $(button).click(this.play.bind(this)));
  }

  play() {
    this.getPositions();
    
  }
     getPositions(){
         this.playerOption = event.target.id;
         console.log(this.playerOption);
//         this.PlayerMove = playerOption;
        this.computerOption = [Math.floor(Math.random() * whoWonTheBattle.length)];
//         getFinalPosition();
 }    


 }







//     //A function that find a id from the clicked  button in the group of button in  .move-buttons div
//     theButtons.each(function (i, button){
//         $(button).click(function (event){
//             playerOption = event.target.id;
//             getPositions();
//         });
//     });

//     // A function that get the Player & Computer' moves 
//     function getPositions(){
//         this.PlayerMove = playerOption;
//         this.ComputerMove = [Math.floor(Math.random() * whoWonTheBattle.length)];
//         getFinalPosition();
//     }

//     // A function that calculate the final position in the Matrix 
//     function getFinalPosition(){
//         let result = whoWonTheBattle[PlayerMove][ComputerMove];
//         TheWinner(result);
//     }

//     //A function that perform actions if the Player wins
//     function PlayerOutput(){
//         $("#resultmessage" ).html("Player wins");
//         playerScoreCount++;
//         let theScore = document.getElementById("Playercount").innerHTML = playerScoreCount;
//     }
//     //A function that perform actions if the Computer wins
//     function ComputerOutput(){
//         $("#resultmessage").html("Computer wins");
//         computerScoreCount++;
//         let theScore = document.getElementById("Computercount").innerHTML = computerScoreCount;
//     }

//     // A function that calculate the Winner by the position in the matrix
//     function TheWinner (theOutcome){
//             //if Outcome = "P" Player wins    if Outcome = "C" Computer wins          
//             this.theOutcome = result; 
//             theOutcome === "P" ? PlayerOutput(): theOutcome === "C" ? ComputerOutput():
//             $("#resultmessage" ).text("It's a draw!");    
//         }
