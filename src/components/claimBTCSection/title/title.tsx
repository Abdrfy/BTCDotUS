export const Title = () => {
    const commonTextProps = 'font-bold text-5xl';
    return (
        <div className="mt-60 flex flex-col tablet:flex-row w-screen justify-center items-center">
            <h1 className={commonTextProps + ' text-white'}>Claim your</h1>
            <h1 className={commonTextProps + ' text-orange-500 mx-1'}>.BTC domain</h1>
        </div>
    );
};
