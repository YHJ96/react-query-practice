import React from 'react';
import ReactQuery from './pages/ReactQuery';
import ReactState from './pages/ReactState';
import ReactQueryDetail from './pages/ReactQueryDetail';
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
        <Route path="/query/:id" element={<ReactQueryDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
