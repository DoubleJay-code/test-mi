import { defineStore } from 'pinia';

interface Card {
  id: {
    type: number;
    required: true;
  };
  title: {
    type: string;
    required: true;
  };
  text: {
    type: string;
    required: true;
  };
  flag?: boolean;
}

export const useAppStore = defineStore('appSore', {
  state: (): any => ({
    cards: [],
  }),
  actions: {
    async getArray() {
      if (localStorage.cards) {
        this.cards = JSON.parse(localStorage.cards);
      } else {
        const res = await fetch('/fetchCards.json');
        const data = await res.json();
        this.cards = data;
      }
    },
    favoriteCard(card: any) {
      this.cards.forEach((el: any, i: number, arr: any) => {
        if (card.id === el.id && card.flag === undefined) {
          this.cards[i] = { ...el, flag: true };
        } else if (card.id === el.id && card.flag === true) {
          this.cards[i] = { ...el, flag: false };
        } else if (card.id === el.id && card.flag === false) {
          this.cards[i] = { ...el, flag: true };
        }
      });
      localStorage.cards = JSON.stringify(this.cards);
    },
  },
});
