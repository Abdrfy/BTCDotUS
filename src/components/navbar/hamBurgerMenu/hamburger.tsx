import SvgLightningSymbol from '../../../images/SVGLightningSymbol';
import { useHamBurgerMenuContext } from '../../../context/hamBurgerMenu/context';

export const HamBurgerButton = () => {
    const { isOpen, setIsOpen } = useHamBurgerMenuContext();

    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="block tablet:hidden pr-2" onClick={divClickedHandler}>
            <SvgLightningSymbol size={'1.5em'} />
        </div>
    );
};
