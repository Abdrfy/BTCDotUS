import { showConnect } from '@stacks/connect';
import { userSession } from './userSession';

export const ShowConnect = () => {
    const myAppName = 'My Btc.us';
    const myAppIcon = './logo.png';
    showConnect({
        userSession,
        appDetails: {
            name: myAppName,
            icon: myAppIcon
        },
        onFinish: () => {
            window.location.reload();
        },
        onCancel: () => {
            console.log('cancelled');
        }
    });
};
