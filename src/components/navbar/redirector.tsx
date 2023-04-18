import React from 'react';
import RedirectorButton from './redirectors/redirectorbutton';
import { IRedirectorButtonProps } from '../../interfaces/IRedirectorButtonProps';

interface IBtnInfoList {
    infoList: IRedirectorButtonProps[];
}

const Redirector = ({ infoList }: IBtnInfoList) => {
    let firstBtnInfo = infoList[0];
    return (
        <div className="flex flex-row space-x-10 items-center">
            {infoList.map((bntInfo) => (
                <RedirectorButton btnInfo={bntInfo} />
            ))}
        </div>
    );
};

export default Redirector;
