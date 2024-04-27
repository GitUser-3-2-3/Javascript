const {
    deposit,
    getNumberOfLines,
    getBet,
    spin,
    transpose,
    printRows,
    getWinnings
}
    = require('./project.js');

const prompt = require("prompt-sync")();

const game = () => {
    let balance = deposit();
    console.log("Your balance: $" + balance);

    while (true) {
        const numberOfLines = getNumberOfLines();

        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;

        const reels = spin();

        const rows = transpose(reels);

        printRows(rows);

        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won: $" + winnings.toString());

        console.log("Your remaining balance: $" + balance);

        if (balance <= 3) {
            console.log("You ran out of money!")
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)? ")
        if (playAgain !== "y") break;
    }
}

game();
