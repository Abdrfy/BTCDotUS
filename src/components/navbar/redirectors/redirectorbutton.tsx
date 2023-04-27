import React, { RefObject } from 'react';
import { IRedirectorButtonProps } from '../../../interfaces/IRedirectorButtonProps';
import SvgLightningSymbol from '../../../images/SVGLightningSymbol';

interface IBtnInfo {
    btnInfo: IRedirectorButtonProps;
}

const RedirectorButton = ({ btnInfo }: IBtnInfo) => {
    const { img: Img } = btnInfo;
    const padding = Img ? 'pl-1' : 'pl-0';
    return (
        <div>
            <button
                type="button"
                className=" hover:opacity-50 text-base inline-flex items-center bg-black dark:text-white min-w-max"
                onClick={() => scrollToElementWithId(btnInfo.redirectToElementWithId)}
            >
                {Img ? <Img size="1.2em" /> : null}
                <span className={padding}> {btnInfo.label} </span>
            </button>
        </div>
    );
};

function scrollToElementWithId(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
}

export default RedirectorButton;
