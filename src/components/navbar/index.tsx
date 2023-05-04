import Home from './home';
import { SignIn } from './signin';
import { Redirectors } from './redirectors';

const NavBar = () => {
    return (
        <>
            <nav className="fixed h-16 tablet:h-20 w-full bg-black flex flex-row justify-between items-center z-10">
                <Home />
                <Redirectors />
                <SignIn />
            </nav>
        </>
    );
};

export default NavBar;
