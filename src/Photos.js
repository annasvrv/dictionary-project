import React from "react";

export default function Photos(props) {
  if (props.photoResult) {
    return (
      <div className="Photos">
        {props.photoResult.map((photo, index) => {
          <img src={photo.src.tiny} alt="" key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
