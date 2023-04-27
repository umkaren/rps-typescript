let playerScore = 0;
let NPCScore = 0;

function play(playerMove: string): void {
    let hand: string[] = ["rock", "paper", "scissors"];
    let NPCMove: string = hand[parseInt(String(Math.random() * 10)) % 3];

    let result: string;
    if (playerMove == NPCMove) {
        result = "It's a tie!";
    } else if ((playerMove == "rock" && NPCMove == "scissors") || 
               (playerMove == "paper" && NPCMove == "rock") ||
               (playerMove == "scissors" && NPCMove == "paper")) 
    {
        playerScore++;
        result = "You win!";
    } else {
        NPCScore++;
        result = "NPC wins!";
    }

    document.getElementById("result")!.innerHTML = `You chose ${playerMove}, NPC chose ${NPCMove}. ${result}`;
    document.getElementById("playerScore")!.innerHTML = playerScore.toString();
    document.getElementById("computerScore")!.innerHTML = NPCScore.toString();
}