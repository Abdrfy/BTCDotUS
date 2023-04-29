import { useEffect, useState } from 'react';
import { useClaimDomainContext } from '../../../context/claimDomain/context';
import { Spinner } from '../../../spinner/spinner';
import { DomainAvailabilityAPI } from '../../../api';

interface ISearchBar {
    searchIcon: React.ReactNode;
    claimBtnDisabled: boolean;
    isAPIRequestInProgress: boolean;
}

export const SearchBar = (props: ISearchBar) => {
    const { setInputValue } = useClaimDomainContext();
    const [isUserTyping, setIsUserTyping] = useState(false);
    const [localInputValue, setlocalInputValue] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            if (localInputValue.length > 0) {
                // REMOVE THIS AFTER ADDING REDUCER
                setIsUserTyping(false);
                setInputValue(localInputValue);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [localInputValue]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsUserTyping(true);
        setlocalInputValue(e.target.value);
        DomainAvailabilityAPI.shared.cancelRequest();
    };

    let shouldDisplaySpinner = props.isAPIRequestInProgress && !isUserTyping;

    return (
        <div className="mt-2 inline-flex w-screen justify-center min-w-max">
            <form className="flex flex-row items-center text-m h-24  box-border bg-white rounded-full py-2 pl-8 w-[50%]">
                {shouldDisplaySpinner ? <Spinner /> : props.searchIcon}
                <input className="text-m grow-[0.95] ml-3 w-0 text-black outline-none " placeholder="Search for your new .BTC domain" onChange={onChange} />
                <button className={' w-[20%] h-[90%] rounded-full color bg-purple-400 text-white font-bold' + (props.claimBtnDisabled ? ' opacity-50' : ' opacity-100')}>Claim</button>
            </form>
        </div>
    );
};
