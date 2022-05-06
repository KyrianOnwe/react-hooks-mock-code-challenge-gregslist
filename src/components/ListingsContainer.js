import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const pack = (props.data)
  // console.log(props.deleteCard)

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */
        pack.map((p) => <ListingCard id={p.id} description={p.description} img={p.image} location={p.location} key={p.id} delCard={props.deleteCard} />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
