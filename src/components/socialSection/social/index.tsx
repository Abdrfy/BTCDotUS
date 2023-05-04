import SvgDiscord from '../../../images/SVGDiscord';
import SvgGithub from '../../../images/SVGGithub';
import SvgTwitter from '../../../images/SVGTwitter';
import { IVerticalImageTitleDesc, VerticalImageTitleComp } from '../../registerationStepsSection/steps/step';

export const SocialOptions = () => {
    const socialOptions: IVerticalImageTitleDesc[] = [
        {
            icon: <SvgDiscord />,
            title: 'Discord'
        },
        {
            icon: <SvgGithub />,
            title: 'Github'
        },
        {
            icon: <SvgTwitter />,
            title: 'Twitter'
        }
    ];

    return (
        <div className="mt-12 flex flex-col tablet:flex-row max-[640px]:space-y-5 tablet:space-x-24 cursor-pointer">
            {socialOptions.map((aSocialInfo) => (
                <VerticalImageTitleComp key={aSocialInfo.title} icon={aSocialInfo.icon} title={aSocialInfo.title} />
            ))}
        </div>
    );
};
