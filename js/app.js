// when the window load it will create a new instance of RPS
$(() => window.onload = new RPS());


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

        this.setUpTable();
        // function for the button event listeners from the front end
        this.ButtonEventListener();
    }
         setUpTable(){
        var imgRock = document.createElement('img');
        imgRock.src = 'img/rock.png';
        imgRock.id = 0;
        imgRock.className = 'rbutton';
        var divRock = document.createElement('div');
        divRock.id = "rock";
        document.getElementsByClassName('move-buttons')[0].appendChild(divRock);
        divRock.appendChild(imgRock);


        var imgPaper = document.createElement('img');
        imgPaper.src = "img/paper.svg";
        imgPaper.id = 1;
        imgPaper.className = 'pbutton';
        var divPaper = document.createElement('div');
        divPaper.id = "paper";
        document.getElementsByClassName('move-buttons')[0].appendChild(divPaper);
        divPaper.appendChild(imgPaper);


        var imgScissors = document.createElement('img');
        imgScissors.src = 'img/scissors.svg';
        imgScissors.id = 2;
        imgScissors.className = 'sbutton';
        var divScissors = document.createElement('div');
        divScissors.id = "Scissors";
        document.getElementsByClassName('move-buttons')[0].appendChild(divScissors);
        divScissors.appendChild(imgScissors);
        
 
    }
    
    
    //A function that find a id from the clicked  button in the group of button in  .move-buttons div
    ButtonEventListener() {
        this.theButtons.each((i, button) => $(button).on('click',this.gameflow.bind(this)));
        //console.log(this.theButtons);
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
}