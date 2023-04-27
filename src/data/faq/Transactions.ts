import { IFAQQUestionAnswerList } from '../../components/faqSection';
import { IFAQQUestionAnswer } from '../../components/faqSection/questionAnswer';
import { IAnswer } from '../../components/faqSection/questionAnswer/faqAnswer';

const answer1: IAnswer[] = [
    {
        isParagraph: true,
        text: 'No. Ledger devices are not yet supported by btc.us. The reason is that btc.us uses '
    },
    {
        isParagraph: false,
        text: 'GAIA',
        href: 'google.com'
    },
    {
        isParagraph: true,
        text: ' to store application data and Ledger is currently not compatible with GAIA. For more info: Click '
    },
    {
        isParagraph: false,
        text: 'here',
        href: 'bing.com'
    }
];

const answer2: IAnswer[] = [
    {
        isParagraph: true,
        text: 'Linking .BTC names to your Nostr profile is still experimental, but it can be tried out. Check out this '
    },
    {
        isParagraph: false,
        text: 'article',
        href: 'google.com'
    },
    {
        isParagraph: true,
        text: ' by New Internet Labs for a more detailed explanation. Note that you can add the required TXT record in the Advanced section on the manage '
    },
    {
        isParagraph: false,
        text: 'page',
        href: 'bing.com'
    },
    {
        isParagraph: true,
        text: ' on btc.us'
    }
];

const answer3: IAnswer[] = [
    {
        isParagraph: true,
        text: 'This is not supported by btc.us. But head over to '
    },
    {
        isParagraph: false,
        text: 'bns.xyz',
        href: 'google.com'
    },
    {
        isParagraph: true,
        text: ' for this service.'
    }
];

const answer4: IAnswer[] = [
    {
        isParagraph: true,
        text: 'The BNS smart contract lives on the bitcoin blockchain, you can view it here: '
    },
    {
        isParagraph: false,
        text: 'BNS',
        href: 'google.com'
    },
    {
        isParagraph: true,
        text: '. The BTC.us app is not open source yet. '
    }
];

const questionAnswer1: IFAQQUestionAnswer = {
    questionInfo: { title: 'Can I use a Ledger wallet to purchase a domain?', isClosed: true, id: 0 },
    answerInfo: { answerInfo: answer1 }
};

const questionAnswer2: IFAQQUestionAnswer = {
    questionInfo: { title: 'How can I link my Nostr profile to my .BTC name?', isClosed: true, id: 1 },
    answerInfo: { answerInfo: answer2 }
};

export const transactionsQuestionAnswersList: IFAQQUestionAnswerList = {
    questionAnswerList: [questionAnswer1, questionAnswer2]
};
