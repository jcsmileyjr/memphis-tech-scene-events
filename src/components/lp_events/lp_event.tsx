import LP_Event_Icon from "./lp_event_icon";
import EventIconName from "@/interfaces/eventIconEnum";

interface EventProps {
    name: string;
    date: string;
    description: string;
    iconName: EventIconName;
    index?: number;
}

const LP_Event = ({ name, date, description, iconName, index }: EventProps) => {
    return (
        <div 
            className={`flex-1 h-full border-[#D9D9D9] border p-4 flex flex-col gap-4 lg:gap-0 justify-between font-quicksand font-normal text-normal xl:text-xl rounded-lg ${
                index === 0 ? "bg-[var(--nav-backgroundcolor)] shadow-md" : ""
            }`}
        >
            <LP_Event_Icon iconName={iconName} />
            <p className='font-bold font-montserrat'>{name}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default LP_Event;