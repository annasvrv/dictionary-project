import React, { useState } from "react";
import axios from "axios";
import "./styles/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-outline-dark " type="submit">
              <i className="fa-solid fa-magnifying-glass" title="Search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
