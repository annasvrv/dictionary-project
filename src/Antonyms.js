import React from "react";

export default function Antonyms(props) {
  if (props.antonyms.length) {
    return (
      <div className="Antonyms">
        <ul className="anton">
          Antonyms:
          {props.antonyms.map((antonim, index) => {
            return <li key={index}> {antonim} </li>;
          })}
        </ul>
      </div>
    );
  }
}
