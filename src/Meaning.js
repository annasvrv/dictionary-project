import React from "react";

export default function Meaning(props) {
  console.log(props.defData);
  return (
    <div className="Meaning">
      <h5>{props.defData.partOfSpeech}</h5>
      {props.defData.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
