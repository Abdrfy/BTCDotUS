import SvgBitcoinStacks from '../../images/BitcointStacks';

function Home() {
    return (
        <a className="hover:opacity-50 text-sm inline-flex items-center bg-black dark:text-white ml-1" href="/">
            <SvgBitcoinStacks />
            <span className="pl-2 text-2xl font-extrabold"> btc.us </span>
        </a>
    );
}

export default Home;
