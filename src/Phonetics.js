import React from "react";
import(
  "https://cdn.jsdelivr.net/npm/@publicservices/button-play-audio@latest/index.js"
);

export default function Phonetics(props) {
  if (props.phonetics.audio.length) {
    return (
      <div className="Phonetics">
        <div className="row mb-3">
          <div className="sound col-1">
            {/* https://www.npmjs.com/package/@publicservices/button-play-audio */}
            {/* <button-play-audio
              url={props.phonetics.audio}
              // text="📢"
            >
              <span slot="icon">
                <i className="fa-solid fa-volume-low"></i>
              </span>
            </button-play-audio> */}
          </div>
          <div className="sound-text col-10">{props.phonetics.text}</div>

          {/* <audio controls>
            <source src={props.phonetics.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
