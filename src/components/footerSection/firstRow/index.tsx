import { Redirectors } from '../../navbar/redirectors';
import { PoweredByAndTC } from './poweredByAndT&C';

export const FooterFirstRow = () => {
    return (
        <footer className="flex flex-row justify-between">
            <PoweredByAndTC />
            {/* should I create a new Redirectors for this footer or can something be done in terms of reusability here */}
            <div className="underline">
                <Redirectors />
            </div>
        </footer>
    );
};
