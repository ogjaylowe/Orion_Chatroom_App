import React from "react";

export default function App() {
  return (
    <div className="App">
      <div class="uk-text-center" uk-grid="true">
        <div class="uk-width-auto">
          <div class="uk-card uk-card-default uk-card-body">Auto</div>
        </div>
        <div class="uk-width-1-3">
          <div class="uk-card uk-card-default uk-card-body">1-3</div>
        </div>
        <div class="uk-width-expand">
          <div class="uk-card uk-card-default uk-card-body">Expand</div>
        </div>
      </div>

      <div className="uk-text-center" uk-grid="true">
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">1</div>
        </div>

        <div className="uk-width-2-3">
          <div className="uk-card uk-card-default uk-card-body">2</div>
        </div>
      </div>

      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        <div>
          <div className="uk-card uk-card-default uk-card-body">4</div>
        </div>

        <div>
          <div className="uk-card uk-card-default uk-card-body ">5</div>
        </div>

        <div>
          <div className="uk-card uk-card-default uk-card-body">6</div>
        </div>
      </div>

      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        <div>
          <div className="uk-card uk-card-default uk-card-body">7</div>
        </div>

        <div>
          <input class="uk-input" type="text" placeholder="Input" />
        </div>

        <div>
          <button class="uk-button uk-button-primary">Primary</button>
        </div>
      </div>
    </div>
  );
}
