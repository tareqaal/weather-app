import React from 'react';

import { Store } from '../App';

export const useStore = () => {
  const context = React.useContext(Store);

  return {
    state: context.state,
    setState: context.setState
  };
};
