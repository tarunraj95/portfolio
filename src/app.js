import React from 'react';
import Hero from './components/hero';
import './index.css';
import WorkExp from './components/workExp';

const App = () => {
  return (
    <div className="mainApp">
      <Hero />
      <WorkExp />
    </div>
  );
};

export default App;
