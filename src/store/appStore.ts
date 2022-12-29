import { defineStore } from 'pinia';

export interface Card {
  id: number;
  title: string;
  text: string;
}

export const useAppStore = defineStore('appSore', {
  state: () => ({
    cards: [] as Card[],
    favoriteCards: {} as { [cardId: number]: boolean },
  }),
  actions: {
    async getArray() {
      const res = await fetch('/fetchCards.json');
      const data: Card[] = await res.json();
      this.cards = data;
      if (localStorage.favorite) {
        this.favoriteCards = JSON.parse(localStorage.favorite);
      }
    },
    toggleFavorite(card: Card) {
      this.favoriteCards[card.id] = !this.favoriteCards[card.id];
      localStorage.favorite = JSON.stringify(this.favoriteCards);
    },
  },
});
