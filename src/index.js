import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// StrictMode is a tool for highlighting potential problems in an application.
// Like Fragment, StrictMode does not render any visible UI.It activates additional 
// checks and warnings for its descendants.

// StrictMode currently helps with:
//   - Identifying components with unsafe lifecycles
//   - Warning about legacy string ref API usage
//   - Warning about deprecated findDOMNode usage
//   - Detecting unexpected side effects
//   - Detecting legacy context API

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);