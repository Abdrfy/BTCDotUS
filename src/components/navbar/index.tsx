import Home from './home';
import Redirector from './redirector';
import SignIn from './signin';
import { IRedirectorButtonProps } from '../../interfaces/IRedirectorButtonProps';
import { ElementIds } from '../../Enums/ElementIds';
import SvgBitcoinStacks from '../../images/BitcointStacks';

const NavBar = () => {
    const redirectorBtnInfoList: Array<IRedirectorButtonProps> = [
        {
            img: SvgBitcoinStacks,
            label: 'Lightning Address',
            redirectToElementWithId: ElementIds.lightning
        },
        {
            label: 'FAQ',
            redirectToElementWithId: ElementIds.faq
        },
        {
            label: 'Support',
            redirectToElementWithId: ElementIds.about
        }
    ];
    return (
        <>
            <nav className="fixed h-20 min-w-full bg-black flex flex-row justify-between items-center z-10">
                <Home />
                <Redirector infoList={redirectorBtnInfoList} />
                <SignIn />
            </nav>
        </>
    );
};

export default NavBar;
