import { IFAQQUestionAnswerList } from '../../components/faq';
import { IFAQQUestionAnswer } from '../../components/faq/questionAnswer';
import { IAnswer, IAnswerInfoList } from '../../components/faq/questionAnswer/faqAnswer';

const lightningAnswer1: IAnswer[] = [
    {
        isParagraph: true,
        text: 'No, btc.us only provides a redirection service between .BTC names and pre-existing lightning addresses.'
    }
];

const lightningQuestionAnswer1: IFAQQUestionAnswer = {
    questionInfo: { title: 'Does btc.us create lightning addresses?', isClosed: true, id: 0 },
    answerInfo: { answerInfo: lightningAnswer1 }
};

export const lightningQuestionAnswersList: IFAQQUestionAnswerList = {
    questionAnswerList: [lightningQuestionAnswer1]
};
