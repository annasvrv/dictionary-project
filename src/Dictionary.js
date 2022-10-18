import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./styles/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    // Documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      

      <form onSubmit={search} className="m-5">
        <div className="row">
          <div className="col-11">
            <input
              type="search"
              placeholder="Search word..."
              autoComplete="off"
              className="wordSearch form-control"
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col text-center">
            <button className="searchBtn btn" type="submit">
              <i className="fa-solid fa-magnifying-glass" title="Search"></i>
            </button>
          </div>
        </div>
      </form>
      <Results resultData={results} />
    </div>
  );
}
