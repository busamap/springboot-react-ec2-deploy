import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
    <h2>Hello from DevOps React Frontend 👋</h2>
    <p>This frontend is now successfully bundled and Dockerized.</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
