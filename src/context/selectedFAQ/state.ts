import { FAQOptions } from '../../Enums/FAQOptions';

export interface FAQState {
    selectedFAQOption: FAQOptions;
    openedQuestionsIndexList: number[];
}

export const initialState: FAQState = {
    selectedFAQOption: FAQOptions.general,
    openedQuestionsIndexList: new Array<number>()
};
