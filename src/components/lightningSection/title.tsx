export const LightningTitle = () => {
    const commonProps = 'font-extrabold text-4xl tabletPlus:text-6xl tablet:text-[39px] ';
    return (
        <div className="mt-16 flex flex-col tablet:flex-row items-center">
            <div className="flex flex-row">
                <h1 className={commonProps + 'text-white'}>The </h1>
                <h1 className={commonProps + 'text-yellow-500 ml-2'}>Lightning</h1>
            </div>
            <h1 className={commonProps + 'text-white ml-2'}>Address</h1>
        </div>
    );
};
