import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <div>
          <em>
            {" "}
            <strong>Example: </strong>
            {props.example}
          </em>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
