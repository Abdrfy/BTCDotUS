interface IAvailability {
    isHidden: boolean;
    text: string;
    textColorString: string;
}

export const Availability = (props: IAvailability) => {
    const isHidden: string = props.isHidden ? ' hidden' : '';
    return <h1 className={'mt-1 bold ' + props.textColorString + isHidden}>{props.text}</h1>;
};
