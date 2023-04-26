export interface IVerticalImageTitleDesc {
    icon: React.ReactNode;
    title: string;
    description?: string;
}

export const VerticalImageTitleComp = (props: IVerticalImageTitleDesc) => {
    return (
        <div className="flex flex-col w-[20%] items-center">
            {props.icon}
            <p className="mt-2 font-bold text-xl text-center">{props.title}</p>
            {props.description ? <p className="mt-2 px-8 text-lg text-center leading-5">{props.description}</p> : null}
        </div>
    );
};
