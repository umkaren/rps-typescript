var playerScore = 0;
var NPCScore = 0;
function play(playerMove) {
    var hand = ["rock", "paper", "scissors"];
    var NPCMove = hand[parseInt(String(Math.random() * 10)) % 3];
    var result;
    if (playerMove == NPCMove) {
        result = "It's a tie!";
    }
    else if ((playerMove == "rock" && NPCMove == "scissors") ||
        (playerMove == "paper" && NPCMove == "rock") ||
        (playerMove == "scissors" && NPCMove == "paper")) {
        playerScore++;
        result = "You win!";
    }
    else {
        NPCScore++;
        result = "NPC wins!";
    }
    document.getElementById("result").innerHTML = "You chose ".concat(playerMove, ", NPC chose ").concat(NPCMove, ". ").concat(result);
    document.getElementById("playerScore").innerHTML = playerScore.toString();
    document.getElementById("computerScore").innerHTML = NPCScore.toString();
}
