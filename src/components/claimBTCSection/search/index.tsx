import { SearchDisclaimer } from './searchDisclaimer';
import { SearchBar } from './searchBar';
import { Availability } from './availability';
import SvgGlassPurple from '../../../images/PurpleSearchIcon';

interface IDiscalimerAvailibility {
    discalimerAndAvailabilityHidden: boolean;
    availabilityText: string;
    availabilityTextColorString: string;
    searchBarIcon: React.ReactNode;
    claimBtnDisabled: boolean;
}

export const Search = () => {
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
        searchBarIcon: <SvgGlassPurple />,
        claimBtnDisabled: true
    };

    const availableStateValues: IDiscalimerAvailibility = {
        discalimerAndAvailabilityHidden: false,
        availabilityText: 'Available for many stx/year',
        availabilityTextColorString: 'text-green-700',
        searchBarIcon: <SvgGlassPurple />,
        claimBtnDisabled: false
    };

    const myStateValues = notSearchedStateValues;

    return (
        <div className="mt-14 mb-10 text-center w-screen">
            <SearchDisclaimer isHidden={myStateValues.discalimerAndAvailabilityHidden} />
            <SearchBar searchIcon={myStateValues.searchBarIcon} claimBtnDisabled={myStateValues.claimBtnDisabled} />
            <Availability text={myStateValues.availabilityText} textColorString={myStateValues.availabilityTextColorString} isHidden={myStateValues.discalimerAndAvailabilityHidden} />
        </div>
    );
};
