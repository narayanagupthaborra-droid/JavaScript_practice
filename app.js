const max =prompt("Enter the maximum number for the guessing game:");
const randomNum = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter your guess:");
while(true){
    if(guess == "quit"){
        console.log("You have quit the game");
        break;
    }else if(guess<randomNum){
        console.log("Your guess is too low!");
        guess = prompt("Enter your guess:");
    }else if(guess>randomNum){
        console.log("Your guess is too high!");
        guess = prompt("Enter your guess:");
    }else if(guess==randomNum){
        console.log("Congratulations! You guessed the number!");
        break;
    }else{
        console.log("Invalid input. Please enter a valid number or 'quit'.");
        guess = prompt("Enter your guess:");
    }
}