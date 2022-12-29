import { defineStore } from 'pinia';

export const useAppStore = defineStore('appSore', {
  state: () => ({
    jsonfe: [],
    cards: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit.1',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora illum nobis porro vitae adipisci harum est velit consequatur aut quiorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora.',
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit.2',
        text: 'Lorem ipsum dolor, arum est velit consequatur aut quidem cum tempore sed quia atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora.',
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit.3',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora illum nobis porro vitae adipisci harum est velit consequatur aut quidem cum 545345tempore sed quia atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora.',
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit.4',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora illum 5555555nobis porro vitae adipisci harum est velit consequatur aut quidem cum tempore sed quia atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora.',
      },
      {
        id: 5,
        title: 'Lorem ipsum dolor sit.5',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora illum nobis porro vitae adipisci harum est velit consequatur aut quidem cum tempore sed quia 111111atque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora.',
      },
      {
        id: 6,
        title: 'Lorem ipsum dolor sit.6',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora illum nobis porro vitae adipisci harum est velit consequatur aut quidem cum tempore sed quia at4455566que! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ullam eligendi voluptatum ea, tempora.',
      },
    ],
    actions: {
      async getArray() {
        const res = await fetch('/fetchCards.json');
        const data = await res.json();
        console.log(data);
      },
    },
  }),
});
