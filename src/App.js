import React, { useState } from "react";

export default function App() {
  var [message, updateMessage] = useState("no message yet");

  return (
    <div className="App">
      <input class="uk-input" type="text" placeholder="Input" />
      <button class="uk-button uk-button-primary">Send Message</button>
    </div>
  );
}
