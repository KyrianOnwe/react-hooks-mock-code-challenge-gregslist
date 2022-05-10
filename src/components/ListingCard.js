import React, { useState } from "react";

function ListingCard(list) {
  // console.log(list)
  const { id, description, img, loc } = list;
  // console.log(img);
  const [starState, setStarState] = useState(true);

  function handleSetStarState(){
    setStarState(!starState)
  }

  // console.log(list.delCard);
  // console.log(id)

  

  return (
    <li className="card" id={id} >
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description} />
      </div>
      <div className="details">
        {starState ? (
          <button className="emoji-button favorite active" onClick={handleSetStarState} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleSetStarState} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {loc}</span>
        <button className="emoji-button delete" onClick={() => list.delCard(id)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
