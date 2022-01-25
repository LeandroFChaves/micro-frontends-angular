import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    const reactVersion = require('./../package.json').dependencies['react'];

    return (
      <div>
        <h1>
          Micro Frontend 3
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="App-logo" alt="logo" />
        </h1>
        <p>
          React Version: {reactVersion}
        </p>
      </div> 
    )
  }
}

class Mfe3Element extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('mfe3-element', Mfe3Element);

