export interface IRegisterationStep {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const RegisterationStep = (props: IRegisterationStep) => {
    return (
        <div className="flex flex-col w-[20%] items-center">
            {props.icon}
            <p className="mt-5 font-bold text-xl text-center">{props.title}</p>
            <p className="mt-2 px-8 text-lg text-center leading-5">{props.description}</p>
        </div>
    );
};
