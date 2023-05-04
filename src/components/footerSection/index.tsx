import { MobileFooter } from './mobileFooter';
import { FooterFirstRow } from './nonMobileFooter/firstRow';
import { FooterSecondRow } from './nonMobileFooter/secondRow';

export const Footer = () => {
    return (
        <footer className="mt-2 bg-black flex flex-col tablet:px-20 py-4 tablet:py-10 space-y-4">
            <div className="hidden tablet:block">
                <FooterFirstRow />
                <FooterSecondRow />
            </div>
            <div className="tablet:hidden">
                <MobileFooter />
            </div>
        </footer>
    );
};
