import { ClassNameProps } from '../../Consts/Constants';
import { ElementIds } from '../../Enums/ElementIds';
import { Description } from './description';
import { LightningSymbol } from './lightningSymbol';
import { LightningTitle } from './title';

export const LightningSection = () => {
    return (
        <div id={ElementIds.lightning}>
            <div className={ClassNameProps.mainCard}>
                <LightningSymbol />
                <LightningTitle />
                <Description />
            </div>
            ;
        </div>
    );
};
