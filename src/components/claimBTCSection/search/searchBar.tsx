interface ISearchBar {
    searchIcon: React.ReactNode;
    claimBtnDisabled: boolean;
}

export const SearchBar = (props: ISearchBar) => {
    console.log(props.claimBtnDisabled);
    return (
        <div className="mt-2 inline-flex w-screen justify-center min-w-max">
            <form className="flex flex-row items-center text-m h-24  box-border bg-white rounded-full py-2 pl-8 w-[50%]">
                {props.searchIcon}
                <input className="text-m grow-[0.95] ml-3 w-0 text-black outline-none " placeholder="Search for your new .BTC domain" />
                <button className={' w-[20%] h-[90%] rounded-full color bg-purple-400 text-white font-bold' + (props.claimBtnDisabled ? ' opacity-50' : ' opacity-100')}>Claim</button>
            </form>
        </div>
    );
};
