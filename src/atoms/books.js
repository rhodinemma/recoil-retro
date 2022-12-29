import { atom } from "recoil";
const booksState = atom({
  key: "books",
  default: [
    {
      id: "001",
      title: "Harry Potter and the Deathly Hallows",
      price: 5.0,
      rating: "5.0",
    },
    {
      id: "002",
      title: "Harry Potter and the Goblet of Fire",
      price: 5.0,
      rating: "4.8",
    },
  ],
});

export { booksState };
