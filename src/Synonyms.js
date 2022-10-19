import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <ul className="synon">
          Synonyms:
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
