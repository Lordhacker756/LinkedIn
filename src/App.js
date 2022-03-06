import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="app">
      {/* Header */}
        <Header/>
      {/* App Body */}
      <div className="app__body">
        <Sidebar/>
      </div>
        {/* Feed */}
        {/* Widget */}
    </div>
  );
}

export default App;
