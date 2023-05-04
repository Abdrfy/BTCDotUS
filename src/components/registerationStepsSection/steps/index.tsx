import SvgDomainManage from '../../../images/SVGDomainManage';
import SvgDomainRegister from '../../../images/SVGDomainRegister';
import SvgDomainSearch from '../../../images/SVGDomainSearch';
import { IVerticalImageTitleDesc, VerticalImageTitleComp } from './step';

export const RegisterationSteps = () => {
    const registerationSteps: IVerticalImageTitleDesc[] = [
        {
            icon: <SvgDomainSearch />,
            title: 'Search',
            description: 'Check the availability of\nyour preferred domain.'
        },
        {
            icon: <SvgDomainRegister />,
            title: 'Register',
            description: 'Register with a Bitcoin\nconnected Stacks account\nin just a few clicks.'
        },
        {
            icon: <SvgDomainManage />,
            title: 'Manage',
            description: 'Manage and self-custody\nyour .BTC domains all in\none place.'
        }
    ];

    return (
        <div className="mt-10 flex flex-col tablet:flex-row tablet:justify-center max-[640px]:items-center max-[640px]:space-y-10 tablet:space-x-10">
            {registerationSteps.map((aRegisterationValue) => (
                <VerticalImageTitleComp key={aRegisterationValue.title} icon={aRegisterationValue.icon} title={aRegisterationValue.title} description={aRegisterationValue.description} />
            ))}
        </div>
    );
};
