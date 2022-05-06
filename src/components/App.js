import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data))

  }, [])
  console.log(listings);

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      } ,
    })
      .then((resp) => resp.json())
      .then((data) => setListings(listings.filter((listing) => listing.id !== id )))
  }

  function handleFilter(event){
    event ? setListings(listings) : setListings(listings.filter((listing) => listing.description === event.target.value ))
  }

  return (
    <div className="app">
      <Header handleFilter={handleFilter} />
      <ListingsContainer data={listings} deleteCard={handleDelete} />
    </div>
  );
}

export default App;
