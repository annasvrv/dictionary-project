import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./styles/Meaning.css";

export default function Meaning(props) {
  // console.log(props.defData);
  return (
    <div className="Meaning">
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h4 className="mb-3">{props.defData.partOfSpeech}</h4>
          {props.defData.definitions.map((definition, index) => {
            return (
              <div key={index} className="mb-2">
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
              </div>
            );
          })}
          <div>
            <Synonyms synonyms={props.defData.synonyms} />
          </div>
          <div>
            <Antonyms antonyms={props.defData.antonyms} />
          </div>
        </div>
      </div>
    </div>
  );
}
