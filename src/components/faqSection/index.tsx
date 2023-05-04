import { ElementIds } from '../../Enums/ElementIds';
import { FAQOptions } from '../../Enums/FAQOptions';
import { FAQContext, useFAQContext } from '../../context';
import { bnsQnAList, generalQnAList, lightningQnAList, refundsQnAList, transactionsQnAList } from '../../data/faq/AllQuestionAnswers';
import { OptionsBar } from './optionsBar';
import { FaqQuestionAnswer, IFAQQUestionAnswer } from './questionAnswer';
import { FAQQuestionAnswerList } from './questionAnswerList';

export interface IFAQQUestionAnswerList {
    questionAnswerList: IFAQQUestionAnswer[];
}

function modifyIsClosedStates(iQAndAlist: IFAQQUestionAnswerList, openedQuestionsIndexList: number[]) {
    const qAndAList = iQAndAlist.questionAnswerList;
    //Reset Array to closed state
    qAndAList.map((qAndAnsObject) => {
        qAndAnsObject.questionInfo.isClosed = true;
        return qAndAnsObject;
    });

    if (openedQuestionsIndexList.length == 0) {
        return;
    }
    openedQuestionsIndexList.forEach(function (questionIndex) {
        let index = qAndAList.findIndex((qAndAnsObject) => qAndAnsObject.questionInfo.id === questionIndex);
        if (index > -1) {
            qAndAList[index].questionInfo.isClosed = false;
        }
    });
    iQAndAlist.questionAnswerList = qAndAList;
}

const FAQ = () => {
    const { state } = useFAQContext();
    let qAndAlist!: IFAQQUestionAnswerList;
    const selectedFAQOption = state.selectedFAQOption;
    switch (selectedFAQOption) {
        case FAQOptions.general:
            qAndAlist = generalQnAList;
            break;
        case FAQOptions.bNS:
            qAndAlist = bnsQnAList;
            break;
        case FAQOptions.transactions:
            qAndAlist = transactionsQnAList;
            break;
        case FAQOptions.lightning:
            qAndAlist = lightningQnAList;
            break;
        case FAQOptions.refund:
            qAndAlist = refundsQnAList;
            break;
    }
    modifyIsClosedStates(qAndAlist, state.openedQuestionsIndexList);
    return (
        <div id={ElementIds.faq} className="mt-32">
            <h1 className="text-6xl font-bold text-center">Frequently Asked Questions</h1>
            <OptionsBar />
            <FAQQuestionAnswerList questionAnswerList={qAndAlist.questionAnswerList} />
        </div>
    );
};

export const FAQSection = () => {
    return (
        <FAQContext>
            <FAQ />
        </FAQContext>
    );
};
