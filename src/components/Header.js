import React from "react";
import Search from "./Search";

function Header(props) {

  // console.log(props.handleFilter)
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filter={props.handleFilter} />
    </header>
  );
}

export default Header;
