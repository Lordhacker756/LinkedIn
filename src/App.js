import React from 'react';
import './App.css';
import Feed from './Components/Feed';
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
        <Feed/>
      </div>
        {/* Feed */}
        {/* Widget */}
    </div>
  );
}

export default App;
