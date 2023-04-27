import { FAQOptions } from '../../Enums/FAQOptions';
import { ActionType, FAQActions, IFAQOptionSelected, IQuestionSelected } from './actions';
import { FAQState } from './state';

export function reducer(state: FAQState, action: FAQActions): FAQState {
    switch (action.type) {
        case ActionType.FAQOption:
            return { selectedFAQOption: action.payload, openedQuestionsIndexList: [] };
        case ActionType.QuestionSelect:
            const openedQuestionIndexList = state.openedQuestionsIndexList;
            const currentSelectedQuestionIndex = action.payload;

            //Check if selected question is present in current openedQuestionsIndexList, if yes then remove it, if not then add it
            let index = openedQuestionIndexList.findIndex((arrayElement) => arrayElement === currentSelectedQuestionIndex);
            if (index > -1) {
                openedQuestionIndexList.splice(index, 1);
            } else {
                openedQuestionIndexList.push(currentSelectedQuestionIndex);
            }
            return { ...state, openedQuestionsIndexList: openedQuestionIndexList };
    }
}

export const faqpOptionSelected = (faqOption: FAQOptions): IFAQOptionSelected => ({
    type: ActionType.FAQOption,
    payload: faqOption
});

export const questionSelected = (questionsOpenList: number): IQuestionSelected => ({
    type: ActionType.QuestionSelect,
    payload: questionsOpenList
});
