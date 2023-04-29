import { ReactNode, createContext, useContext, useState } from 'react';

type InputClaimDomain = {
    inputValue: string; // Name of the domain
    setInputValue: (input: string) => void;
};

const Context = createContext<InputClaimDomain>({
    inputValue: '',
    setInputValue: () => {}
});

export const ClaimDomainContext = ({ children }: { children: ReactNode }) => {
    const [inputValue, setInputValue] = useState('');
    return <Context.Provider value={{ inputValue, setInputValue }}>{children}</Context.Provider>;
};

export const useClaimDomainContext = () => useContext(Context);
