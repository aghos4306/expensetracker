import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Palkka', amount: 890 },
    { id: 3, text: 'Kirja', amount: -10 },
    { id: 4, text: 'Kamera', amount: 130 },
  ],
};

//create global context using createContext
export const GlobalContext = createContext(initialState);

//Provider component to give other components access to Global context, takes children as props
//these children are the other components in this project
//Provider provides states and action to the components that its wrapped around in.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};