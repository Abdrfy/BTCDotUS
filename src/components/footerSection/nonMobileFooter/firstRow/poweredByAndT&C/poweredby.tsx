import SvgLightningSymbol from '../../../../../images/SVGLightningSymbol';

export const PoweredBy = () => {
    return (
        <div className="hover:scale-110 text-white flex flex-row justify-center">
            <a href="https://google.com">
                Powered By
                <span> </span>
                <div className="inline-flex">
                    <SvgLightningSymbol size="1em" />
                </div>
                <span className="font-bold">Bitcoin </span> +<span> </span>
                <div className="inline-flex">
                    <SvgLightningSymbol size={'1em'} />
                </div>
                <span>Stacks</span>
            </a>
        </div>
    );
};
