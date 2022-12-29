import { atom } from "recoil";
const savedBooksState = atom({
  key: "savedBooks",
  default: [],
});
export { savedBooksState };
