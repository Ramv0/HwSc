import { Card } from "./Card";
import { CardOrganizer } from "./CardOrganizer";
import { RecentMistakesFirstSorter } from "./RecentMistakesFirstSorter";
import * as readline from "readline";

const cards: Card[] = [];
cards.push(new Card("Capital of Saudi?", "Riyadh"));
cards.push(new Card("2 + 1 = ?", "3"));
cards.push(new Card("This computer username?", "Rama"));
cards.push(new Card("Color of the sea?", "blue"));

const organizer: CardOrganizer = new RecentMistakesFirstSorter();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Flashcard Trainer!");
console.log("Type 'quit' to exit at any time.\n");

let round = 1;

function askQuestion(index: number) {
    if (index >= cards.length) {
        const reordered = organizer.reorganize(cards);
        cards.length = 0;
        cards.push(...reordered);

        console.log(`End of round ${round}.`);
        console.log("Cards with recent mistakes will appear first in the next round.\n");
        round++;
        console.log(`========== ROUND ${round} ==========`);

        askQuestion(0);
        return;
    }

    const card = cards[index];
    console.log(`Q: ${card.getQuestion()}`);
    rl.question("> ", (input) => {
        if (input && input.trim().toLowerCase() === "quit") {
            console.log("Exiting... Goodbye!");
            rl.close();
            return;
        }

        const correct = card.checkAnswer(input);

        if (correct) {
            console.log("Correct!");
        } else {
            console.log("Incorrect. Correct answer: " + card.getAnswer());
        }

        console.log();
        askQuestion(index + 1);
    });
}

console.log(`========== ROUND ${round} ==========`);  
askQuestion(0);
