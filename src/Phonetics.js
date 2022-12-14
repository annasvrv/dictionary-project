import React from "react";
import "./styles/Phonetics.css";

export default function Phonetics(props) {
  if (props.phone.text) {
    return (
      <div className="Phonetics">
        <div className="row mb-3">
          <div className="sound col-1">
            {/*npm source audio button:
              https://www.npmjs.com/package/@publicservices/button-play-audio */}
            <button-play-audio url={props.phone.audio}>
              <span slot="icon" className="icon">
                <i className="fa-solid fa-volume-low"></i>
              </span>
            </button-play-audio>
          </div>
          <div className="sound-text col-10">{props.phone.text}</div>

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
