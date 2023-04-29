import React, { createContext, useContext, ReactNode, useReducer } from 'react';
import { FAQState, initialState } from './state';
import { FAQActions } from './actions';
import { reducer } from './reducer';

const Context = createContext<{
    state: FAQState;
    dispatch: React.Dispatch<FAQActions>;
}>({
    state: initialState,
    dispatch: () => undefined
});

export const FAQContext = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useFAQContext = () => useContext(Context);
