import React from "react";
import { useRecoilValue } from "recoil";
import { savedBooksState } from "./atoms/savedBooks";
import { totalPrice } from "./selectors/totalPrice";

export function SavedBooks() {
  const savedBooks = useRecoilValue(savedBooksState);
  const getTotalPrice = useRecoilValue(totalPrice);
  
  return (
    <div>
      <p> No. of Books: {savedBooks.length} </p>
      <p> Total price: ${getTotalPrice} </p>
    </div>
  );
}
