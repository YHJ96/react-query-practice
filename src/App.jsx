import React from 'react';
import ReactQuery from './pages/ReactQuery';
import ReactState from './pages/ReactState';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Link to="/">
        <li>React-State</li>
      </Link>
      <Link to="/query">
        <li>React-Query</li>
      </Link>
      <Routes>
        <Route path="/" element={<ReactState />} />
        <Route path="/query" element={<ReactQuery />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
