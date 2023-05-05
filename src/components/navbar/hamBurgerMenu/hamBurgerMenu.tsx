import { ElementIds } from '../../../Enums/ElementIds';
import { useHamBurgerMenuContext } from '../../../context/hamBurgerMenu/context';
import SvgLightningSymbol from '../../../images/SVGLightningSymbol';
import { IRedirectorButtonProps } from '../../../interfaces/IRedirectorButtonProps';
import { SignIn } from '../signin';

export const HamBurgerMenu = () => {
    const { isOpen, setIsOpen } = useHamBurgerMenuContext();

    const redirectorBtnInfoList: Array<IRedirectorButtonProps> = [
        {
            img: SvgLightningSymbol,
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

    function scrollToElementWithId(elementId: string) {
        setIsOpen(false);
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full space-y-4">
                {redirectorBtnInfoList.map((btnInfo) => (
                    <button className="text-sm tablet:text-base inline-flex items-center bg-black dark:text-white min-w-max" onClick={() => scrollToElementWithId(btnInfo.redirectToElementWithId)}>
                        {btnInfo.img ? <btnInfo.img size="1.2em" /> : null}
                        <span className={btnInfo.img ? 'pl-1' : 'pl-0'}> {btnInfo.label} </span>
                    </button>
                ))}
            </div>
            <SignIn />
        </div>
    );
};
