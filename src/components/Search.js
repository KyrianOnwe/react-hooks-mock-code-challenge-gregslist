import React, { useState } from "react";

function Search(filt) {
  const findIt = filt.filter;
  // console.log(filt)
  const [search, setSearch] = useState("")

  function handleSetSearch(e){
    setSearch(e.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    findIt();
    
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSetSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
