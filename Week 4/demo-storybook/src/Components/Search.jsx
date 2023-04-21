import React, { useState } from "react";
import ClearnButton from "./Atoms/ClearButton/ClearnButton";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search item name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ClearnButton />
    </div>
  );
};

export default Search;
