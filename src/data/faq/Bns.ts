import { IFAQQUestionAnswerList } from '../../components/faqSection';
import { IFAQQUestionAnswer } from '../../components/faqSection/questionAnswer';
import { IAnswer } from '../../components/faqSection/questionAnswer/faqAnswer';

const answer1: IAnswer[] = [
    {
        isParagraph: true,
        text: 'Domains cost 2 STX today and renew every 5 years.'
    }
];

const answer2: IAnswer[] = [
    {
        isParagraph: true,
        text: "You can use your .BTC name to sign into hundreds of pre-existing decentralized apps and to send and receive STX. They also function much like traditional domain names. Compatibility via a web bridge with the DNS system of web 2.0 allows you to use a .BTC name for a business or personal site, however you'd like."
    }
];

const answer3: IAnswer[] = [
    {
        isParagraph: true,
        text: ' .BTC names are registered by sending two transactions to the BNS smart contract on the Stacks chain. BNS is the “Bitcoin Name System”, a decentralised name registration app that can be compared to its Ethereum counterpart ENS. Transactions are finalized on Bitcoin. BTC names are fundamentally under your control and resistant to seizure or censorship.'
    }
];

const questionAnswer1: IFAQQUestionAnswer = {
    questionInfo: { title: 'How much do domains cost?', isClosed: true, id: 0 },
    answerInfo: { answerInfo: answer1 }
};

const questionAnswer2: IFAQQUestionAnswer = {
    questionInfo: { title: 'How can I use domains?', isClosed: true, id: 1 },
    answerInfo: { answerInfo: answer2 }
};

const questionAnswer3: IFAQQUestionAnswer = {
    questionInfo: { title: 'How does it work?', isClosed: true, id: 2 },
    answerInfo: { answerInfo: answer3 }
};

export const bnsQuestionAnswersList: IFAQQUestionAnswerList = {
    questionAnswerList: [questionAnswer1, questionAnswer2, questionAnswer3]
};
