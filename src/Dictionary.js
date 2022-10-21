import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./styles/Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePixcelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    // Documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pixelsApiKey =
      "563492ad6f91700001000001dc029d1b2f8c42bfa4238278227f178a";
    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pixelsApiKey}` };

    axios.get(pixelsApiUrl, { headers: headers }).then(handlePixcelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="m-5">
          <div className="row">
            <div className="col-11">
              <input
                type="search"
                placeholder="Search for a word..."
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
        <Results resultData={results} photoResult={photos} />
        <Photos photoResult={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
