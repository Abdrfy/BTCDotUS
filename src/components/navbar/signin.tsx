import { showConnect } from '@stacks/connect';
import { userSession } from '../../stacks/userSession';

export const SignIn = () => {
    const myAppName = 'My Btc.us';
    const myAppIcon = '../../logo.svg';

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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

    return (
        <button className="px-8 bg-indigo-600 font-bold text-white rounded-full hover:bg-indigo-400 h-[60%] mr-5" onClick={buttonHandler}>
            Sign In
        </button>
    );
};
