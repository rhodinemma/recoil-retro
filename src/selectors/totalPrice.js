import { selector } from "recoil";
import { savedBooksState } from "../atoms/savedBooks";

const totalPrice = selector({
  key: "getTotalPrice",
  get: ({ get }) => {
    const savedBooks = get(savedBooksState);
    const totalPrice = savedBooks.reduce(
      (totalCost, item) => totalCost + item.price,
      0
    );
    return totalPrice;
  },
});

export { totalPrice };
