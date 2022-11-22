import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Info from './components/Info';
import AboutMe from './components/AboutMe';

function App() {
  return (
  <div>
    <Header />
    <Info />
    <AboutMe />
  </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 