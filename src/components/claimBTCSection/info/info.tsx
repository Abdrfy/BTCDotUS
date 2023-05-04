import SvgInfoIcons from '../../../images/InfoIcons';

export const Info = () => {
    const props = 'font-bold text-xl text-white';
    return (
        <div className=" flex-col w-screen text-center">
            <h1 className={props}>Decentralized names are secured on the Bitcoin</h1>
            <h1 className={props}>blockchain, registered by Stacks.</h1>
            <div className="flex justify-center">
                <SvgInfoIcons />
            </div>
        </div>
    );
};
