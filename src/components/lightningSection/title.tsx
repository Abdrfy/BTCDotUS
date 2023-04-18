export const LightningTitle = () => {
    const commonProps = 'font-extrabold text-5xl ';
    return (
        <div className="mt-20 inline-flex flex-row">
            <h1 className={commonProps + 'text-white'}>The </h1>
            <h1 className={commonProps + 'text-orange-500 ml-2'}>Lightning</h1>
            <h1 className={commonProps + 'text-white ml-2'}>Address</h1>
        </div>
    );
};
