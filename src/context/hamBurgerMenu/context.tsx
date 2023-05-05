import { ReactNode, createContext, useContext, useState } from 'react';

type HamBurgerMenuState = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const Context = createContext<HamBurgerMenuState>({
    isOpen: false,
    setIsOpen: () => {}
});

export const HamBurgerMenuContext = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <Context.Provider value={{ isOpen, setIsOpen }}>{children}</Context.Provider>;
};

export const useHamBurgerMenuContext = () => useContext(Context);
