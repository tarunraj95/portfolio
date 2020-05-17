import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { HeroScrollProvider } from './context/heroScrollContext';


ReactDom.render(
  <HeroScrollProvider>
    <App />
  </HeroScrollProvider>, document.getElementById('root')
);
