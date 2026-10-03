const max = prompt("Please enter the max number :");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number :");
while (true) {
    if (guess == "quit") {
        console.log("your qite");
        break;
    }
    if (guess == random) {
        console.log("Congrest you are write guess. random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("your guess was too small. please try again")
    } else {
        guess = prompt("you guess was too large. please try again")
    }
}