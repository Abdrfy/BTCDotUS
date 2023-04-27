import { PoweredBy } from './poweredby';
import { TermsConditionsAndMail } from './termsConditions';

export const PoweredByAndTC = () => {
    return (
        <div className="flex flex-row space-x-8">
            <PoweredBy />;
            <TermsConditionsAndMail />
        </div>
    );
};
