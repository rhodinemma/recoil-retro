import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { booksState } from "./atoms/books";
import { savedBooksState } from "./atoms/savedBooks";

export function Books() {
  const books = useRecoilValue(booksState);
  const setSavedBooks = useSetRecoilState(savedBooksState);

  // logic to add a book to savedBooks
  const add = (book) => {
    //  assign value of payload to book
    setSavedBooks((state) => {
      return [...state, book];
    });
  };

  // logic to remove a book from savedBooks
  const remove = (book) => {
    //  assign value of payload to book
    setSavedBooks((state) => {
      const bookIndex = state.findIndex((x) => x.title === book.title);
      // if no match, return the previous state
      if (bookIndex < 0) return state;
      // avoid mutating the original state, create a copy
      const stateUpdate = [...state];
      // then splice it out from the array
      stateUpdate.splice(bookIndex, 1);
      return stateUpdate;
    });
  };

  return (
    <div style={{ border: "1px solid", width: "35%" }}>
      <ul className="Books">
        {books.map((book) => {
          return (
            <li className="book" key={book.title}>
              <header>
                <h3> {book.title} </h3>
                <p>Rating: {book.rating} </p>
                <p> ${book.price} </p>
              </header>
              <button onClick={() => add(book)}> Add </button>
              <button onClick={() => remove(book)}> Remove </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
