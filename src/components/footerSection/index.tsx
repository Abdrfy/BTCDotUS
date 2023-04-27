import { FooterFirstRow } from './firstRow';
import { FooterSecondRow } from './secondRow';

export const Footer = () => {
    return (
        <footer className="mt-2 bg-black flex flex-col px-20 py-10 space-y-4">
            <FooterFirstRow />
            <FooterSecondRow />
        </footer>
    );
};
