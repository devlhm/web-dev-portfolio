import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import MyWorks from './components/MyWorks';
import './App.css';

function App() {
  return (
    <div id="container">
      <Header />
      <Presentation />
      <AboutMe />
      <MyWorks />
    </div>
  );
}

export default App;