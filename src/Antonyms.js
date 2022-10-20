import React from "react";
import "./styles/Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms.length) {
    return (
      <div className="Antonyms">
        <ul className="antonyms-list">
          <span>Antonyms:</span>
          {props.antonyms.map((antonim, index) => {
            return <li key={index}> {antonim} </li>;
          })}
        </ul>
      </div>
    );
  }
}
