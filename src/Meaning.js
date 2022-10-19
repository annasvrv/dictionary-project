import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  console.log(props.defData);
  return (
    <div className="Meaning">
      <div className="card mb-3 shadow">
        <div className="card-body ">
          <h4 className="mb-3">{props.defData.partOfSpeech}</h4>
          {props.defData.definitions.map((definition, index) => {
            return (
              <div key={index}>
                <p className="definition">
                  <strong>Definition: </strong>
                  {definition.definition}
                </p>
                <Example example={definition.example} />
              </div>
            );
          })}
          <Synonyms synonyms={props.defData.synonyms} />
          <Antonyms antonyms={props.defData.antonyms} />
        </div>
      </div>
    </div>
  );
}
