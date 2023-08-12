import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export const Book = ({item}) => {
  const { stateArr, handleChange } = useContext(DataContext);
  const { id, title, author, state } = item;
  return (
    <div key={id}>
      <p>
        <b>Title:{title}</b>
      </p>
      <p>Author:{author}</p>
      <select
        name=""
        id=""
        defaultValue={state}
        onChange={(e) => handleChange(e, id)}
      >
        {stateArr.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
