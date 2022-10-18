import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.resultData) {
    return (
      <div className="Results">
        <h2>{props.resultData.word}</h2>
        <div className="phonetic mb-3">{props.resultData.phonetic}</div>
        {/* <audio controls>
          <source src={props.resultData.phonetics[0].audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
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
