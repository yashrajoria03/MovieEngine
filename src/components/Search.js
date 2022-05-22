import React from "react";
import SearchIcon from "../search.svg";

function Search(props) {
  const [movie, getMovie] = React.useState("");

  const handleChange = (event) => {
    getMovie(event.target.value);
  };

  function handleClick() {
    props.function(movie);
  }
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Search your movie here"
        className="search-field"
        onChange={handleChange}
      ></input>
      <img src={SearchIcon} onClick={handleClick} alt="search" />
    </div>
  );
}
export default Search;
