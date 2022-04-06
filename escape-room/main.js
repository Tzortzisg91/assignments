const readline = require("readline-sync");

console.log("Room description")


let gameOver = false;

let keyFound = false;

while (!gameOver) {

    const options = ["Put hand in hole", "Find the key", "Open the door"];

    const index = readline.keyInSelect(options, "What action will you take?");

    switch (index) {
        case 0:
            console.log("theres a cobra in there and now youre dead");
            gameOver = true;
            break;
        case 1:
            if (!keyFound) {
                console.log("You begin to rummage around in your pockets and find a key..");
            keyFound = true;
            } else {
                console.log("You fail to find any additional keys (but why would you expect more? are you a janitor?) ");
            }
            break;
        case 2:
            if (keyFound) {
                console.log("You put the key into the door and it works! (thank god youre out!)");
                gameOver = true
            } else {
                console.log("You sit there and sob quietly...then think of new options");
            }
            break;
        default:
            console.log("did you quit? ");
            gameOver = true;
    }
};
