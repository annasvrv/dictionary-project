import React from "react";
import "./styles/Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <ul className="synonyms-list">
          <span>Synonyms:</span>
          {props.synonyms.map((synonym, index) => {
            return <li key={index}> {synonym} </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
