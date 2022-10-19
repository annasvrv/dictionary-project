import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <p className="ex">
          Example: <em>{props.example}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
