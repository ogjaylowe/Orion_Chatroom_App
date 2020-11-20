import React, { useState } from "react";

export default function App() {
  var [message, updateMessage] = useState("no message yet");

  return (
    <div className="App">
      <h1>{message}</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Input"
        onChange={() => updateMessage("this has changed")}
      />
      <button
        className="uk-button uk-button-primary"
        onClick={() => console.log(message + " has been sent!")}
      >
        Send Message
      </button>
      <button onClick={() => updateMessage("example 2 button")}>
        example 2
      </button>
      <button onClick={() => updateMessage("example 3 button")}>
        example 3
      </button>
      <button onClick={() => updateMessage("example 4 button")}>
        example 4
      </button>
    </div>
  );
}
