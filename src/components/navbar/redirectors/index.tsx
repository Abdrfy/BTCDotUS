import { ElementIds } from '../../../Enums/ElementIds';
import SvgLightningSymbol from '../../../images/SVGLightningSymbol';
import { IRedirectorButtonProps } from '../../../interfaces/IRedirectorButtonProps';
import Redirector from './redirector';

export const Redirectors = () => {
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
    return <Redirector infoList={redirectorBtnInfoList} />;
};
