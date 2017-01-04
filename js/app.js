$(() => window.rps = new RPS());

class RPS {
    constructor() {
        //Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and COmputer ; Row then Column
        this.whoWonTheBattle = [
                   //(C)Rock Paper Scissors
            /*(P)rock */['D', 'C', 'P'],
              /*Paper */['P', 'D', 'C'],
            /*Scissors*/['C', 'P', 'D']
        ];

        //this will store the player and computer options
        this.playerOption;
        this.computerOption;

        //global variable for computerOption / playerOption / the result
        this.result;

        // the result message element from the front end
        this.message = $("#resultmessage");
        this.playerScore = $("#playerCount");
        this.computerScore = $("computerCount");
        this.playerScoreCount  = 0;
        this.computerScoreCount  = 0;
        //console.log(playerScoreCount++);
        this.theButtons = $('.move-buttons div');
        //console.log(this.theButtons);

        // Run the object prototype function to add event listeners to the DOM elements above
        this.ButtonEventListener();
    }
    //A function that find a id from the clicked  button in the group of button in  .move-buttons div
    ButtonEventListener() {
        this.theButtons.each((i, button) => $(button).click(this.gameflow.bind(this)));
    }

    gameflow() {
        this.getPositions();
        this.getFinalMatrixPosition();
        this.outcome();
        this.ScoreUpdate();

    }
    getPositions() {
        this.playerOption = event.target.id;
        this.computerOption = [Math.floor(Math.random() * this.whoWonTheBattle.length)];
    }
    getFinalMatrixPosition(){
        this.result = this.whoWonTheBattle[this.playerOption][this.computerOption];
    }
    outcome(){
        this.theOutcome = this.result; 
        this.theOutcome === "P" ? $(this.message).html("Player wins"): 
        this.theOutcome === "C" ? $(this.message).html("Computer wins") : 
            $(this.message).html("Its a draw");   
    }
    ScoreUpdate(){
        this.winner = this.result;
         this.winner === "P" ? $(this.playerScore).html(parseInt(this.playerScoreCount)+1):
         this.winner === "C" ? $(this.computerScore).html(parseInt(this.computerScoreCount)+1):
         $(this.message).html("Its a draw");   

    }
}


//     //A function that perform actions if the Computer wins
//     function ComputerOutput(){
//         $("#resultmessage").html("Computer wins");
//         computerScoreCount++;
//         let theScore = document.getElementById("Computercount").innerHTML = computerScoreCount;
//     }

