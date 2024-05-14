import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import FavList from './component/FavList/FavList';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
