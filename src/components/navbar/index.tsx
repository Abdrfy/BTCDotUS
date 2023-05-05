import Home from './home';
import { SignIn } from './signin';
import { Redirectors } from './redirectors';
import { HamBurgerButton } from './hamBurgerMenu/hamburger';
import { useHamBurgerMenuContext } from '../../context/hamBurgerMenu/context';
import { HamBurgerMenu } from './hamBurgerMenu/hamBurgerMenu';

const NavBar = () => {
    const { isOpen } = useHamBurgerMenuContext();
    return (
        <nav className="fixed z-10 w-full bg-black flex flex-col">
            <div className="h-16 tablet:h-20 flex flex-row justify-between items-center">
                <Home />
                <div className="hidden tablet:block">
                    <Redirectors />
                </div>
                <SignIn />
                <HamBurgerButton />
            </div>
            {isOpen ? <HamBurgerMenu /> : null}
        </nav>
    );
};

export default NavBar;
