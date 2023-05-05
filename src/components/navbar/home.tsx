import SvgBitcoinStacks from '../../images/BitcointStacks';

function Home() {
    return (
        <a className="-translate-x-4 hover:opacity-50 text-sm inline-flex items-center bg-black dark:text-white" href="/">
            <SvgBitcoinStacks size={'3.5em'} />
            <span className="pl-2 text-lg tablet:text-2xl font-extrabold"> btc.us </span>
        </a>
    );
}

export default Home;
