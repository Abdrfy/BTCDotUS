import { FAQOptions } from '../../Enums/FAQOptions';

export enum ActionType {
    FAQOption,
    QuestionSelect
}

export interface IFAQOptionSelected {
    type: ActionType.FAQOption;
    payload: FAQOptions;
}

export interface IQuestionSelected {
    type: ActionType.QuestionSelect;
    payload: number;
}

export type FAQActions = IFAQOptionSelected | IQuestionSelected;
