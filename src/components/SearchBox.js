import React from "react";

// searchChange is a callback function passed from App as a prop
// anytime SeaerchBox input changes, we call the searchChange() function in App
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
