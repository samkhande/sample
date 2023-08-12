import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { Book } from "../components/Book";

export const Home = () => {
  const { books } = useContext(DataContext);
  return (
    <div>
      <h2>Reading</h2>
      {books.booksData
        .filter((item) => item.state === "Reading")
        .map((item) => (
          // Book(item)
          <div key={item.id}>
            <Book item={item} />
          </div>
        ))}

      <h2>Read</h2>
      {books.booksData
        .filter((item) => item.state === "Read")
        .map((item) => (
          // Book(item)
          <div key={item.id}>
            <Book item={item} />
          </div>
        ))}

      <h2>Want To Read</h2>
      {books.booksData
        .filter((item) => item.state === "Want To Read")
        .map((item) => (
          // Book(item)
          <div key={item.id}>
            <Book item={item} />
          </div>
        ))}
    </div>
  );
};
