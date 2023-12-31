import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LazyLoadedComponent from './components/LazyLoadedComponent';
import './App.css';

const tabs = [
  { id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js' },
  { id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js' },
  { id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js' },
];

function App() {

  // Simulation of work with api

  // const [tabs, setTabs] = useState([]);
  
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/tabs.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       const sortedTabs = data.sort((a, b) => a.order - b.order);
  //       setTabs(sortedTabs);
  //     })
  //     .catch(error => console.error('Something went wrong...', error));
  // }, []);
  
  return (
    <Router>
      <nav>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link to={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {tabs.map((tab) => (
          <Route
            key={tab.id}
            path={tab.id}
            element={
              <LazyLoadedComponent path={tab.path} />
            }
          />
        ))}
          <Route
            path="/"
            element={
              <Navigate to={`/${tabs.length > 0 ? tabs[0].id : ''}`} />
            }
          />
      </Routes>
    </Router>
  );
}

export default App;