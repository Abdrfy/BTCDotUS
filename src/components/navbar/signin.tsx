import { ShowConnect } from '../../stacks/showConnect';

export const SignIn = () => {
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        ShowConnect();
    };

    return (
        <button className="px-8 bg-indigo-600 font-bold text-white rounded-full hover:bg-indigo-400 h-[60%] mr-5" onClick={buttonHandler}>
            Sign In
        </button>
    );
};
