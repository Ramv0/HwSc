"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentMistakesFirstSorter = void 0;
class RecentMistakesFirstSorter {
    reorganize(cards) {
        if (!cards || cards.length <= 1) {
            return cards;
        }
        const incorrect = [];
        const others = [];
        for (const card of cards) {
            if (card.wasIncorrectInLastRound()) {
                incorrect.push(card);
            }
            else {
                others.push(card);
            }
        }
        return [...incorrect, ...others];
    }
}
exports.RecentMistakesFirstSorter = RecentMistakesFirstSorter;
