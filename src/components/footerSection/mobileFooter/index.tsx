import { Redirectors } from '../../navbar/redirectors';
import { PoweredBy } from '../nonMobileFooter/firstRow/poweredByAndT&C/poweredby';
import { TermsConditionsAndMail } from '../nonMobileFooter/firstRow/poweredByAndT&C/termsConditions';
import { LocalizationOptions } from '../nonMobileFooter/secondRow/localizationOptions';
import { Social } from '../nonMobileFooter/secondRow/social';

export const MobileFooter = () => {
    return (
        <div className="flex flex-col items-center text-sm space-y-2 pb-2">
            <PoweredBy />
            <div className="pt-2">
                <Redirectors />
            </div>
            <TermsConditionsAndMail />
            <Social />
            <LocalizationOptions />
        </div>
    );
};
