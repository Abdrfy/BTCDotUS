export const GoldSection = () => {
    return (
        <div className="flex flex-col items-center px-20 mt-20 space-y-5">
            <h1 className="mx-96 text-5xl font-extrabold text-center">Gold is a rock. Bitcoin is not a f------ rock.</h1>
            <div className="flex flex-col space-y-5 px-60">
                <p className="text-lg font-semibold text-center">
                    Bitcoin has proven itself as a store of value protocol. Stacks is on a mission to prove that Bitcoin can also be the bedrock of the user owned internet. Stacks brings scalable
                    transactions and expressive smart contracts to Bitcoin, putting Bitcoin’s $1T capital to work.
                </p>
                <p className="text-lg font-semibold text-center">
                    .BTC domains are registered through a smart contract on Stacks, secured by Bitcoin. This smart contract implements a decentralized name registry written in Clarity lang. Ownership
                    of every .BTC name is represented in a hash of the Bitcoin blockchain. Instead of spamming the bitcoin blockchain with name registrations, thousands of Stacks transactions settle
                    in a single transaction on the bitcoin blockchain.
                </p>
            </div>
            <a className="underline text-blue-700 font-bold text-lg hover:text-indigo-500">Learn more at stacks.co</a>
        </div>
    );
};
