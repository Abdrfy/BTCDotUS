import SvgInfoIcons from '../../../images/InfoIcons';

export const Info = () => {
    return (
        <div className=" flex-col w-screen text-center text-sm tablet:text-xl font-bold text-white">
            <h1>Decentralized names are secured on the Bitcoin</h1>
            <h1>blockchain, registered by Stacks.</h1>
            <div className="flex justify-center">
                <SvgInfoIcons />
            </div>
        </div>
    );
};
