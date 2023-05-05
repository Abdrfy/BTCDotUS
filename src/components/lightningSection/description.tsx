export const Description = () => {
    return (
        <div className="mt-5 px-[15%] flex flex-col items-center space-y-5">
            <h1 className="text-xl tablet:text-2xl font-bold text-white text-center">Send money as easily as an email. Connect your .BTC domain to Lightning.</h1>
            <p className="text-white text-center font-medium">
                The Lightning Address is an Internet Identifier that allows anyone to send you Bitcoin over the Lightning Network without the need to request invoices every time. The Lightning Address
                empowers everyone to send money like we send emails — instantly and abundantly. This is coupled with Lightning Networks ability to send bitcoin instantly and with minimal fees.
            </p>
            <p className="text-white text-center font-medium">BTC.US now provides an integration between .BTC domains and Lightning Addresses. This is powered by the BTC.US web-bridge.</p>
            <button className="py-5 px-8 bg-blue-600 font-bold text-white rounded-full hover:bg-indigo-400 ">Keep Reading</button>
            <p className="text-white text-center font-medium">BTC.US-web-bridge: lets you connect .BTC names to conventional DNS. Learn More</p>
        </div>
    );
};
