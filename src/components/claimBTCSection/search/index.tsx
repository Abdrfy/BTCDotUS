import { SearchDisclaimer } from './searchDisclaimer';
import { SearchBar } from './searchBar';
import { Availability } from './availability';
import SvgGlassPurple from '../../../images/PurpleSearchIcon';
import SvgCross from '../../../images/SVGCross';
import SvgTick from '../../../images/SVGTick';
import { useClaimDomainContext } from '../../../context/claimDomain/context';
import { useEffect, useState } from 'react';
import { DomainAvailabilityAPI } from '../../../api';

interface IDiscalimerAvailibility {
    discalimerAndAvailabilityHidden: boolean;
    availabilityText: string;
    availabilityTextColorString: string;
    searchBarIcon: React.ReactNode;
    claimBtnDisabled: boolean;
}

export const Search = () => {
    const [isAPIRequestInProgress, setIsAPIRequestInProgress] = useState(false);
    // THese are only here as placeholders for values that will come from API and some values will be calculated based of that
    const notSearchedStateValues: IDiscalimerAvailibility = {
        discalimerAndAvailabilityHidden: true,
        availabilityText: '',
        availabilityTextColorString: '',
        searchBarIcon: <SvgGlassPurple />,
        claimBtnDisabled: true
    };

    const unavailableStateValues: IDiscalimerAvailibility = {
        discalimerAndAvailabilityHidden: false,
        availabilityText: 'Unavailable',
        availabilityTextColorString: 'text-black',
        searchBarIcon: <SvgCross />,
        claimBtnDisabled: true
    };

    const availableStateValues: IDiscalimerAvailibility = {
        discalimerAndAvailabilityHidden: false,
        availabilityText: 'Available for many stx/year',
        availabilityTextColorString: 'text-green-700',
        searchBarIcon: <SvgTick />,
        claimBtnDisabled: false
    };

    let myStateValues = notSearchedStateValues;

    const { inputValue } = useClaimDomainContext();
    const checkDomainAvailability = async () => {
        setIsAPIRequestInProgress(true);
        const response = await DomainAvailabilityAPI.shared.checkDomainAvailaility(inputValue);
        setIsAPIRequestInProgress(false);
        if (response) {
            console.log('Clain Domain API Response ', response);
        }
    };

    useEffect(() => {
        if (inputValue.length > 0) {
            checkDomainAvailability();
        } else {
            myStateValues = notSearchedStateValues;
        }
    }, [inputValue]);

    return (
        <div className="mt-14 mb-10 text-center w-screen flex flex-col">
            <SearchDisclaimer isHidden={myStateValues.discalimerAndAvailabilityHidden} />
            <SearchBar searchIcon={myStateValues.searchBarIcon} claimBtnDisabled={myStateValues.claimBtnDisabled} isAPIRequestInProgress={isAPIRequestInProgress} />
            <Availability text={myStateValues.availabilityText} textColorString={myStateValues.availabilityTextColorString} isHidden={myStateValues.discalimerAndAvailabilityHidden} />
        </div>
    );
};
