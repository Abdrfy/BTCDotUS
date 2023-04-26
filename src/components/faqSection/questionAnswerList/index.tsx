import { Fragment } from 'react';
import { IFAQQUestionAnswerList } from '..';
import { FaqQuestionAnswer } from '../questionAnswer';

export const FAQQuestionAnswerList = (props: IFAQQUestionAnswerList) => {
    const qAndAList = props;
    return (
        <div className="mt-10 flex flex-col space-y-3 items-center pb-8">
            {qAndAList.questionAnswerList.map((qAndA) => (
                <FaqQuestionAnswer questionInfo={qAndA.questionInfo} answerInfo={qAndA.answerInfo} />
            ))}
        </div>
    );
};
