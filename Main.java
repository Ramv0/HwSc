import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        List<Card> cards = new ArrayList<>();
        cards.add(new Card("Capital of Saudi?", "Riyadh"));
        cards.add(new Card("2 + 1 = ?", "3"));
        cards.add(new Card("This computer username?", "Rama"));
        cards.add(new Card("Color of the sea?", "blue"));

        CardOrganizer organizer = new RecentMistakesFirstSorter();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Flashcard Trainer!");
        System.out.println("Type 'quit' to exit at any time.\n");

        int round = 1;

        while (true) {
            System.out.println("========== ROUND " + round + " ==========");

            for (Card card : cards) {
                System.out.println("Q: " + card.getQuestion());
                System.out.print("> ");

                String input = scanner.nextLine();

                if (input != null && input.trim().equalsIgnoreCase("quit")) {
                    System.out.println("Exiting... Goodbye!");
                    scanner.close();
                    return;
                }

                boolean correct = card.checkAnswer(input);

                if (correct) {
                    System.out.println("Correct!");
                } else {
                    System.out.println("Incorrect. Correct answer: " + card.getAnswer());
                }

                System.out.println();
            }

            cards = organizer.reorganize(cards);

            System.out.println("End of round " + round + ".");
            System.out.println("Cards with recent mistakes will appear first in the next round.\n");

            round++;
        }
    }
}