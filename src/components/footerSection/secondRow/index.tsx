import { LocalizationOptions } from './localizationOptions';
import { Social } from './social';

export const FooterSecondRow = () => {
    return (
        <div className="flex flex-row justify-between">
            <LocalizationOptions />
            <Social />
        </div>
    );
};
