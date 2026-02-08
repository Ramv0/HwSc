export class Card {
    private question: string;
    private answer: string;
    private lastAnswerCorrect: boolean | null;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
        this.lastAnswerCorrect = null;
    }

    getQuestion(): string {
        return this.question;
    }

    getAnswer(): string {
        return this.answer;
    }

    checkAnswer(userAnswer: string | null): boolean {
        if (userAnswer === null) {
            this.lastAnswerCorrect = false;
            return false;
        }

        const normalizedUser = userAnswer.trim();
        const correct = this.answer.toLowerCase() === normalizedUser.toLowerCase();
        this.lastAnswerCorrect = correct;
        return correct;
    }

    wasIncorrectInLastRound(): boolean {
        return this.lastAnswerCorrect === false;
    }

    toString(): string {
        return `Card{question='${this.question}', answer='${this.answer}', lastAnswerCorrect=${this.lastAnswerCorrect}}`;
    }
}
