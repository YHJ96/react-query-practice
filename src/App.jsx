import React from 'react';
import ReactQuery from './pages/ReactQuery';
import ReactState from './pages/ReactState';
import ReactQueryDetail from './pages/ReactQueryDetail';
import ReactUseQueries from './pages/ReactUseQueries';
import ReactUseMutation from './pages/ReactUseMutation';
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
      <Link to="/queries">
        <li>React-UseQueries</li>
      </Link>
      <Link to="/mutation">
        <li>React-UseMutation</li>
      </Link>
      <Routes>
        <Route path="/" element={<ReactState />} />
        <Route path="/queries" element={<ReactUseQueries />} />
        <Route path="/mutation" element={<ReactUseMutation />} />
        <Route path="/query" element={<ReactQuery />} />
        <Route path="/query/:id" element={<ReactQueryDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
