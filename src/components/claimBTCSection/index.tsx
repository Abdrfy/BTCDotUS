import { Title } from './title/title';
import { ElementIds } from '../../Enums/ElementIds';
import { Search } from './search';
import { Info } from './info/info';
import { ClaimDomainContext } from '../../context/claimDomain/context';

export const ClaimDomainSection = () => {
    return (
        <section id={ElementIds.claimBTCDomain}>
            <Title />
            <ClaimDomainContext>
                <Search />
            </ClaimDomainContext>
            <Info />
        </section>
    );
};
