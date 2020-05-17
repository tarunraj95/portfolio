import React, { useState } from 'react';

const HeroScrollContext = React.createContext('');

const HeroScrollProvider = props => {
  const [heroScrollState, setHeroScrollState] = useState(1);
  return (
    <HeroScrollContext.Provider value={{ heroScrollState, setHeroScrollState }}>
      {props.children}
    </HeroScrollContext.Provider>
  );
};

export { HeroScrollContext, HeroScrollProvider };
