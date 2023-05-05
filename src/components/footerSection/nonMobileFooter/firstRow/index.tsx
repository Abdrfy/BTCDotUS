import { Redirectors } from '../../../navbar/redirectors';
import { PoweredByAndTC } from './poweredByAndT&C';

export const FooterFirstRow = () => {
    return (
        <div className="flex flex-col tablet:flex-row items-center tablet:justify-between">
            <PoweredByAndTC />
            {/* should I create a new Redirectors for this footer or can something be done in terms of reusability here */}
            <div className="underline">
                <Redirectors />
            </div>
        </div>
    );
};
