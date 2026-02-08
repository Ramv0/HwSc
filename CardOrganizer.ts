import { Card } from "./Card";

export interface CardOrganizer {
    reorganize(cards: Card[]): Card[];
}
