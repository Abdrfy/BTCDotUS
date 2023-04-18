import { Title } from './title/title';
import { ElementIds } from '../../Enums/ElementIds';
import { Search } from './search';
import { Info } from './info/info';

export const ClaimDomainSection = () => {
    return (
        <section id={ElementIds.claimBTCDomain}>
            <Title />
            <Search />
            <Info />
        </section>
    );
};
