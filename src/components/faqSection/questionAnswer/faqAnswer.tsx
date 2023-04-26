import parse from 'html-react-parser';

export interface IAnswer {
    isParagraph: boolean; // Can either be <p> or <a> - if true then <p> else <a>
    text: string;
    href?: string;
}

export interface IAnswerInfoList {
    answerInfo: IAnswer[];
}

export const FAQAnswer = ({ answerInfo }: IAnswerInfoList) => {
    let docStr: string = '';
    answerInfo.forEach(function (aDocInfo) {
        const isParagraph = aDocInfo.isParagraph;
        docStr += isParagraph ? '' : `<a className="underline" href="${aDocInfo.href}">`;
        docStr += aDocInfo.text;
        docStr += isParagraph ? '' : `</a>`;
    });
    let doc = new DOMParser().parseFromString(docStr, 'text/html');
    return <div className="mb-4 text-white">{parse(docStr)}</div>;
};
