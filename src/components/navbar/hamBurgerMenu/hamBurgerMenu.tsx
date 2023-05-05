import { useRef } from 'react';
import { ElementIds } from '../../../Enums/ElementIds';
import { useHamBurgerMenuContext } from '../../../context/hamBurgerMenu/context';
import SvgLightningSymbol from '../../../images/SVGLightningSymbol';
import { IRedirectorButtonProps } from '../../../interfaces/IRedirectorButtonProps';
import { ShowConnect } from '../../../stacks/showConnect';
import { useOnClickOutside } from '../../../hooks/hooks';

export const HamBurgerMenu = () => {
    const { isOpen, setIsOpen } = useHamBurgerMenuContext();

    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => {
        if (isOpen) {
            setIsOpen(false);
        }
    });

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

    const signInButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        ShowConnect();
    };

    return (
        <div ref={node} className="flex flex-col items-center w-full space-y-4 pb-4">
            {redirectorBtnInfoList.map((btnInfo) => (
                <button
                    key={btnInfo.label}
                    className="text-sm tablet:text-base inline-flex items-center justify-center bg-black dark:text-white w-full"
                    onClick={() => scrollToElementWithId(btnInfo.redirectToElementWithId)}
                >
                    {btnInfo.img ? <btnInfo.img size="1.2em" /> : null}
                    <span className={btnInfo.img ? 'pl-1' : 'pl-0'}> {btnInfo.label} </span>
                </button>
            ))}
            <button className="text-sm bg-indigo-600 font-bold text-white rounded-full w-20 h-8" onClick={signInButtonHandler}>
                Sign In
            </button>
        </div>
    );
};
