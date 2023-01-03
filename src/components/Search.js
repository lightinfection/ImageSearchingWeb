import React from "react";
//import { $ } from "jquery";

const Search = ({ updatesearch, resetinput }) => {
  //$("button").click(() => {
  //  alert("You are clicking on the button");
  //});
  const inputhandler = (e) => {
    resetinput(e.target.value);
  };
  return (
    <div className="search">
      <input type="text" onChange={inputhandler} />
      <button onClick={updatesearch}>Search</button>
    </div>
  );
};

export default Search;
