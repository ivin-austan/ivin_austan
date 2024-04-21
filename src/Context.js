import React, { createContext, useState } from 'react';


export const Contextreact = createContext();

const Context = ({ children }) => {
  const [scroll, setScroll] = useState(false);

  return (
    <Contextreact.Provider value={{ scroll, setScroll }}>
      {children}
    </Contextreact.Provider>
  );
};

export default Context;