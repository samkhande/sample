import { createContext, useContext, useState } from "react";
import booksData from "../data/books.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState({ booksData });
  const [search, setSearch] = useState([]);
  const stateArr = ["Reading", "Read", "Want To Read"];

  const handleChange = (e, id) => {
    const selectedState = e.target.value;

    setBooks({
      ...books,
      booksData: books.booksData.map((item) =>
        item.id === id ? { ...item, state: selectedState } : { ...item }
      ),
    });
  };

  const handleSearch = (e) => {
    const searchedValue = e.target.value;
    setSearch(
      books.booksData.filter((item) =>
        item.title.toLowerCase().includes(searchedValue.toLowerCase())
      )
    );
  };

  return (
    <DataContext.Provider
      value={{ books, stateArr, handleChange, handleSearch, search }}
    >
      {children}
    </DataContext.Provider>
  );
};
