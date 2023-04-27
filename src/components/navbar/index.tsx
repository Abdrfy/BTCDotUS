import Home from './home';
import Redirector from './redirectors/redirector';
import SignIn from './signin';
import { Redirectors } from './redirectors';

const NavBar = () => {
    return (
        <>
            <nav className="fixed h-20 min-w-full bg-black flex flex-row justify-between items-center z-10">
                <Home />
                <Redirectors />
                <SignIn />
            </nav>
        </>
    );
};

export default NavBar;
