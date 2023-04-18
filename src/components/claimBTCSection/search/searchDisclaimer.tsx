interface IHidden {
    isHidden: boolean;
}

export const SearchDisclaimer = (props: IHidden) => {
    let classNameStr = 'text-red-600 italic text-center w-screen';
    if (props.isHidden) {
        classNameStr += ' hidden';
    }
    return <h1 className={classNameStr}>*Names are unique and limited to one name per account.</h1>;
};
