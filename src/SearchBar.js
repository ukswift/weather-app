import React from "react";

export const SearchBar = (props) => {
  return (
    <div className="serachBarContainer">
      <div className="searchBar">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.fetchData(props.refs.current.value);
          }}
        >
          <input type="search" ref={props.refs} />
          <i
            onClick={() => props.fetchData(props.refs.current.value)}
            className="fa fa-search"
          ></i>
        </form>
      </div>
    </div>
  );
};
