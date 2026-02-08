public class Card {

    private final String question;
    private final String answer;
    private Boolean lastAnswerCorrect;

    public Card(String question, String answer) {
        this.question = question;
        this.answer = answer;
        this.lastAnswerCorrect = null;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public boolean checkAnswer(String userAnswer) {
        if (userAnswer == null) {
            lastAnswerCorrect = false;
            return false;
        }

        String normalizedUser = userAnswer.trim();
        boolean correct = answer.equalsIgnoreCase(normalizedUser);
        lastAnswerCorrect = correct;
        return correct;
    }

    public boolean wasIncorrectInLastRound() {
        return Boolean.FALSE.equals(lastAnswerCorrect);
    }

    @Override
    public String toString() {
        return "Card{" +
                "question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", lastAnswerCorrect=" + lastAnswerCorrect +
                '}';
    }
}