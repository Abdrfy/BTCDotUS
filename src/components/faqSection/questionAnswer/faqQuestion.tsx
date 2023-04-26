import { useFAQContext } from '../../../context';
import { questionSelected } from '../../../context/selectedFAQ/reducer';
import SvgMinus from '../../../images/SVGMinus';
import SvgPlus from '../../../images/SVGPlus';

export interface IQuestion {
    title: string;
    isClosed: boolean;
    id: number;
}

export const FAQQuestion = (props: IQuestion) => {
    const { state, dispatch } = useFAQContext();

    const isClosed = props.isClosed;
    const color = isClosed ? 'text-white' : 'text-indigo-600';
    const hover = isClosed ? 'hover:text-indigo-600' : '';
    const classNameStr = color + ' ' + hover;

    const buttonHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('question button handler');
        event.preventDefault();

        const div: HTMLDivElement = event.currentTarget;
        dispatch(questionSelected(Number(div.id)));
    };

    return (
        <div id={props.id.toString()} className="flex flex-row w-full mb-7 cursor-pointer items-center justify-between" onClick={buttonHandler}>
            <button className={classNameStr + ' font-bold text-xl text-left'}>{props.title}</button>
            {isClosed ? (
                <div className="hover:scale-110">
                    {' '}
                    <SvgPlus />{' '}
                </div>
            ) : (
                <div className="hover:scale-110">
                    {' '}
                    <SvgMinus />{' '}
                </div>
            )}
        </div>
    );
};
