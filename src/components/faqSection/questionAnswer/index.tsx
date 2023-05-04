import { FAQAnswer, IAnswerInfoList } from './faqAnswer';
import { FAQQuestion, IQuestion } from './faqQuestion';

export interface IFAQQUestionAnswer {
    questionInfo: IQuestion;
    answerInfo: IAnswerInfoList;
}

export const FaqQuestionAnswer = (prop: IFAQQUestionAnswer) => {
    return (
        <div className="bg-black rounded-lg w-[80%] tablet:w-[60%] ps-10 pe-8 pt-8 flex flex-col transition-all">
            <FAQQuestion title={prop.questionInfo.title} isClosed={prop.questionInfo.isClosed} id={prop.questionInfo.id} />
            {prop.questionInfo.isClosed ? null : <FAQAnswer answerInfo={prop.answerInfo.answerInfo} />}
        </div>
    );
};
