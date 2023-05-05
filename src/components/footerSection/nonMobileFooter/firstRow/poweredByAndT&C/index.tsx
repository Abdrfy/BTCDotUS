import { PoweredBy } from './poweredby';
import { TermsConditionsAndMail } from './termsConditions';

export const PoweredByAndTC = () => {
    return (
        <div className="flex flex-col tablet:flex-row tablet:space-x-4 ">
            <PoweredBy />;
            <TermsConditionsAndMail />
        </div>
    );
};
