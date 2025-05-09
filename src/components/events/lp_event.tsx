import LP_Event_Icon from "./lp_event_icon";

interface EventProps {
    name: string;
    date: string;
    description: string;
    iconName: string;
}

const LP_Event = ({ name, date, description, iconName }: EventProps) => {
    return (
        <div className='flex-1 h-full border-[#D9D9D9] border p-4 flex flex-col gap-4 lg:gap-0 justify-between font-quicksand font-normal rounded-lg shadow-md'>
            <LP_Event_Icon iconName={iconName} />
            <p className='font-bold text-normal xl:text-xl font-montserrat'>{name}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default LP_Event;