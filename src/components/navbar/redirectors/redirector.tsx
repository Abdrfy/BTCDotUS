import React from 'react';
import RedirectorButton from './redirectorbutton';
import { IRedirectorButtonProps } from '../../../interfaces/IRedirectorButtonProps';

interface IBtnInfoList {
    infoList: IRedirectorButtonProps[];
}

const Redirector = ({ infoList }: IBtnInfoList) => {
    return (
        <div className="flex flex-row justify-between w-[20%] space-x-4">
            {infoList.map((bntInfo) => (
                <RedirectorButton key={bntInfo.label} btnInfo={bntInfo} />
            ))}
        </div>
    );
};

export default Redirector;
