document.addEventListener('DOMContentLoaded' , function(){
    alert("All elements are loaded");
    
//list of computer's choice in an array object'
let computerChoiceOptions = ["rock","paper","scissors"];
//list of user's choice in an array object'
let userChoiceOptions = ["rock","paper","scissors"];


//Player score and computer score which starts at zero
let playerScoreCount = 0;
let computerScoreCount = 0;


//global variable for playerChoice & computerChoiceOption
let playerOption;
let computeroption;


// message statements
let drawResultMessage = "It's a draw";
let playerResultMessage = "Player wins";
let computerResultMessage = "Computer wins";
   
     //add an addEventListener for click for RockButton button
     RockButton.addEventListener("click", function(){

        //The posiotn rock in userChoiceOption array is assign to playerChoice variable
        let playerChoice = userChoiceOptions[0];
        //the variable to passed to global variable PlayerOption
        playerOption  = playerChoice;

        //generate a random - MAth.random generate a random number between 0.999 Math.floor round a number up or down to the
        // list.length give the MAth.random scope between 0 to 2.999 3 so it can only pick between 0,1 and 2
        let comuterchoice = computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)];
        //the variable to passed to global variable Computeroption
        computeroption  = comuterchoice;

        //Function whoWonTheBattle is called taking the two parameters to see who won
        whoWonTheBattle(computeroption,PlayerOption);
    });

       //add an addEventListener for click on PaperButton Button
    PaperButton.addEventListener("click", function(){

        //The position of paper in userChoiceOption array is assign to playerChoice variable
        let playerChoice = userChoiceOptions[1];
        //the variable to passed to global variable PlayerOption
        playerOption  = playerChoice;

        let comuterchoice = computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)];
        //the variable to passed to global variable Computeroption
        computeroption  = comuterchoice;


      //Function whoWonTheBattle is called taking the two parameters to see who won
     whoWonTheBattle(computeroption,playerOption);

     
    });


    //add an addEventListener for click on ScissorsButton button
    ScissorsButton.addEventListener("click", function(){

        //The position of scissors in userChoiceOption array is assign to playerChoice variable
        let playerChoice = userChoiceOptions[2];
        //the variable to passed to global variable PlayerOption
        playerOption  = playerChoice;

        let comuterchoice = computerChoiceOptions[Math.floor(Math.random() * computerChoiceOptions.length)];
        //the variable to passed to global variable Computeroption
        computeroption  = comuterchoice;
        //Function whoWonTheBattle is called taking the two parameters to see who won
        whoWonTheBattle(computeroption,playerOption);

     });

            //Function whoWonTheBattle which takes two parameters 
           function whoWonTheBattle(computerFinalPick,playerFinalPick) {
               // computerFinalPick & playerFinalPick will hold the value of the computer choice - randomise and Player Option- a button 
               // they have pressed
             this.computerFinalPick = computerOption;
             this.playerFinalPick = playerOption;

                    //If the player and the computer pick the same tool
                    if (playerFinalPick === computerFinalPick) {
                        let messageStatement = document.getElementById("resultmessage").innerHTML = drawResultMessage;
                
                    // if player picks rock and computer picks paper
                    } if (playerFinalPick ==="rock"  && computerFinalPick === "paper") {
                        computerScoreCount++;
                        let messageStatement = document.getElementById("resultmessage").innerHTML = computerResultMessage;
                        let theScore = document.getElementById("Computercount").innerHTML = computerScoreCount;
                        
                        //role reverse if player picks paper and computer picks rock
                        //paper beat rock
                    } else if(playerFinalPick === "paper"  && computerFinalPick === "rock"){
                        playerScoreCount++;
                        let messageStatement = document.getElementById("resultmessage").innerHTML = playerResultMessage; 
                        let theScore = document.getElementById("Playercount").innerHTML = playerScoreCount;

                        //if player picks scissors and computer picks paper
                        //scissors beat paper
                    } if (playerFinalPick === "scissors"  && computerFinalPick === "paper") {
                        playerScoreCount++;
                        let messageStatement = document.getElementById("resultmessage").innerHTML = playerResultMessage;
                        let theScore = document.getElementById("Playercount").innerHTML = playerScoreCount;

                        //role reverse if player picks paper and computer picks scissors
                        //scissors beat paper
                    } else if (playerFinalPick === "paper"  && computerFinalPick === "scissors") {
                        computerScoreCount++;
                        let messageStatement = document.getElementById("resultmessage").innerHTML = computerResultMessage;
                        let theScore = document.getElementById("Computercount").innerHTML = computerScoreCount;
                        
                    //IF player picks rock and computer picks scissors
                    } if(playerFinalPick === "rock"  && computerFinalPick === "scissors"){
                        playerScoreCount++;
                        let messageStatement = document.getElementById("resultmessage").innerHTML = playerResultMessage;
                        let theScore = document.getElementById("Playercount").innerHTML = playerScoreCount;
                
                        //role reverse if player picks scissors and computer picks rock
                    } else if (playerFinalPick === "scissors"  && computerFinalPick === "rock") {
                        computerScoreCount++;
                        let messageStatement = document.getElementById("resultmessage").innerHTML = computerResultMessage;
                        let theScore = document.getElementById("Computercount").innerHTML = computerScoreCount;
                        
                    }
      }
    

});
