import { ElementIds } from '../../Enums/ElementIds';
import { Description } from './description';
import { LightningSymbol } from './lightningSymbol';
import { LightningTitle } from './title';

export const LightningSection = () => {
    return (
        <div id={ElementIds.lightning}>
            <div className="card">
                <LightningSymbol />
                <LightningTitle />
                <Description />
            </div>
        </div>
    );
};
