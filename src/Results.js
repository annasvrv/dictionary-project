import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.resultData) {
    return (
      <div className="Results">
        <h2>{props.resultData.word}</h2>
        <span>{props.resultData.phonetic}</span>
        {props.resultData.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning defData={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
