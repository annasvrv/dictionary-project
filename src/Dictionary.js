import React, { useState } from "react";
import "./styles/Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function search(event) {
    event.reventDefault();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search word..."
              autoComplete="off"
              className="form-control w-100"
              onChange={handleWordChange}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-outline-dark " type="submit">
              <i className="fa-solid fa-magnifying-glass" title="Search"></i>
            </button>
          </div>
        </div>
      </form>
      <h4 className="mt-3">Searching for {word}</h4>
    </div>
  );
}
