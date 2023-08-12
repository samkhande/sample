import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { Book } from "../components/Book";

export const Search = () => {
  const { handleSearch, search } = useContext(DataContext);
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search books..."
        onChange={(e) => handleSearch(e)}
      />
      {search.map((item) => (
        // Book(item)
        <div key={item.id}>
          <Book item={item} />
        </div>
      ))}
    </div>
  );
};
