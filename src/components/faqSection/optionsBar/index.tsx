import { FAQOptions } from '../../../Enums/FAQOptions';
import SvgScrollLeftIcon from '../../../images/SVGScrollLeftIcon';
import { FAQOptionButton } from './faqOptionButton';

export const OptionsBar = () => {
    const faq_options_container_id = 'faq_options_container';

    const scrollLeft = () => {
        scroll(-200);
    };

    const scrollRight = () => {
        scroll(200);
    };

    const scroll = (scrollBy: number) => {
        const faqOptionsContainer = document.getElementById(faq_options_container_id);
        if (faqOptionsContainer) {
            faqOptionsContainer.scrollBy({
                left: scrollBy,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mt-10 bg-black">
            <div className="flex flex-row place-content-center justify-center items-center">
                <div className="hover:scale-125 cursor-pointer" onClick={scrollLeft}>
                    <SvgScrollLeftIcon />
                </div>
                <div id={faq_options_container_id} className="overflow-x-auto w-[60%] mx-2 py-4 scroll-smooth bg-black whitespace-nowrap">
                    {Object.values(FAQOptions).map((faqOption) => (
                        <FAQOptionButton key={faqOption} title={faqOption} />
                    ))}
                </div>
                <div className="hover:scale-125 rotate-180 cursor-pointer" onClick={scrollRight}>
                    <SvgScrollLeftIcon />
                </div>
            </div>
        </div>
    );
};
