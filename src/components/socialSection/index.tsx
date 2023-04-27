import { ElementIds } from '../../Enums/ElementIds';
import { JoinCommunity } from './joinCommunity';
import { SocialOptions } from './social';

export const SocialSection = () => {
    return (
        <div id={ElementIds.about} className="mt-10 flex-col flex items-center">
            <JoinCommunity />
            <SocialOptions />
        </div>
    );
};
