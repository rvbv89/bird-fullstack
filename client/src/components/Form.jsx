import React, { useState } from "react";

export default function Form({ data }) {
  const search = document.getElementById("search");
  const [filterContent, setFilterContent] = useState("");

  const filter = function filter() {
    setFilterContent(search.value);
    if (search.value === "") {
      console.log("contains");
    }
  };

  return (
    <div className="form-flex">
      <select name="Filter By..." id="filter">
        <option value="">Filter By...</option>
        <option value="comName">Common Name</option>
        <option value="sciName">Scientific Name</option>
      </select>
      <div>
        <input
          onChange={(e) => filter()}
          id="search"
          className="ui input focus"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
