import java.util.ArrayList;
import java.util.List;

public class RecentMistakesFirstSorter implements CardOrganizer {

    @Override
    public List<Card> reorganize(List<Card> cards) {
        if (cards == null || cards.size() <= 1) {
            return cards;
        }

        List<Card> incorrect = new ArrayList<>();
        List<Card> others = new ArrayList<>();

        for (Card card : cards) {
            if (card.wasIncorrectInLastRound()) {
                incorrect.add(card);
            } else {
                others.add(card);
            }
        }

        List<Card> result = new ArrayList<>(cards.size());
        result.addAll(incorrect);
        result.addAll(others);

        return result;
    }
}