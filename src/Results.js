import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

import "./styles/Results.css";

export default function Results(props) {
  if (props.resultData) {
    return (
      <div className="Results">
        <section className="card mb-3 shadow-sm">
          <div className="card-body">
            <h2>{props.resultData.word}</h2>
            {props.resultData.phonetics.map((phonetic, index) => {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </div>
        </section>

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
