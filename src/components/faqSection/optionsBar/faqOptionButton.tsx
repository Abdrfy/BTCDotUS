import { FAQOptions } from '../../../Enums/FAQOptions';
import { useFAQContext } from '../../../context';
import { faqpOptionSelected } from '../../../context/selectedFAQ/reducer';

interface IFAQOption {
    title: string;
}

export const FAQOptionButton = (props: IFAQOption) => {
    const { state, dispatch } = useFAQContext();

    const selectedFAQOption = state.selectedFAQOption;
    const isSelected = selectedFAQOption === props.title;
    const bgColor = isSelected ? 'bg-indigo-600' : 'bg-white';
    const textColor = isSelected ? 'text-white' : 'text-indigo-600';
    const bgHoverColor = isSelected ? '' : 'hover:bg-indigo-600';
    const textHoverColor = isSelected ? '' : 'hover:text-white';

    const colorProps = bgColor + ' ' + textColor + ' ' + bgHoverColor + ' ' + textHoverColor;

    const reverse = new Map(Object.values(FAQOptions).map((item) => [item.toString(), item]));

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        if (button.id !== selectedFAQOption) {
            const faqEnum: FAQOptions | undefined = reverse.get(button.id);
            if (faqEnum) {
                dispatch(faqpOptionSelected(faqEnum));
            }
        }
    };

    return (
        <button id={props.title} className={colorProps + ' rounded-md tablet:rounded-xl mx-1 tablet:mx-2 py-2 tablet:py-4 w-[40%] tablet:w-[25%] text-[12px] tablet:text-base'} onClick={buttonHandler}>
            {props.title}
        </button>
    );
};
