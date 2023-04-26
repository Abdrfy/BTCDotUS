import { JoinCommunity } from './joinCommunity';
import { SocialOptions } from './social';

export const SocialSection = () => {
    return (
        <div className="mt-10 flex-col flex items-center">
            <JoinCommunity />
            <SocialOptions />
        </div>
    );
};
