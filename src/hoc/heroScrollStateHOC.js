import React from 'react';
import { HeroScrollContext } from '../context/heroScrollContext';

const withHeroScrollState = (WrappedComponent) => {
  return (props) => {
    return (
      <HeroScrollContext.Consumer>
        {({ heroScrollState }) => (
          <WrappedComponent {...props} heroScrollState={heroScrollState} />
        )}
      </HeroScrollContext.Consumer>
    );
  };
};

export default withHeroScrollState;
