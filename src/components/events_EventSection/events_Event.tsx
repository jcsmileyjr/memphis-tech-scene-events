import { User } from "lucide-react";
import Link from "next/link";
import EventInterface from "@/interfaces/eventInterface";
import { getMonthAndDay } from "@/libs/getMonthAndDay";

const EventsEvent = ({
    name,
    date,
    description,
    eventCategory,
    eventType,
    RSVP,
    time,
}: EventInterface) => {
    const formattedDate = getMonthAndDay(date);
    return (
        <div className="flex flex-col lg:flex-row gap-2 w-full">
            {/** Mobile view */}
            <div className="flex lg:hidden flex-row justify-between items-center">
                <div className="bg-[var(--color-primary-blue)] text-white font-montserrat flex flex-row items-center justify-center gap-4 p-2 rounded-lg shadow-lg">
                    <p className="font-bold text-shadow-lg">{formattedDate}</p>
                    <p className="font-normal text-shadow-lg">{time}</p>
                </div>
                <p className="bg-[var(--nav-backgroundcolor)] text-black text-sm font-montserrat px-4 py-2 rounded-sm shadow-lg">
                    {eventCategory}
                </p>
            </div>
            <div className="flex lg:hidden flex-1 w-full">
                <div className="flex flex-col items-start gap-4">
                    <p className="text-xl font-montserrat font-medium text-[var(--color-primary-blue)] text-shadow-lg">
                        {name}
                    </p>
                    <p className="text-base font-quicksand font-semibold text-shadow-lg">
                        {description}
                    </p>
                    <Link
                        href={RSVP}
                        className="text-[#4a4a4a] font-montserrat text-xl underline font-bold text-shadow-lg"
                    >
                        Click here for details
                    </Link>
                </div>
            </div>
            {/** Desktop view */}
            <div className="hidden bg-[var(--color-primary-blue)] text-white font-montserrat lg:flex flex-col items-center justify-center h-20 w-24 p-2 rounded-lg shadow-lg">
                <p className="font-bold text-shadow-lg">{formattedDate}</p>
                <p className="font-normal text-shadow-lg">{time}</p>
            </div>
            <div className="hidden lg:flex flex-col flex-1 w-full">
                <div className="flex flex-row justify-between items-center ">
                    <p className="text-xl font-montserrat font-medium text-[var(--color-primary-blue)] text-shadow-lg">
                        {name}
                    </p>
                    <p className="bg-[var(--nav-backgroundcolor)] text-black text-sm font-montserrat px-4 py-2 rounded-sm shadow-lg">
                        {eventCategory}
                    </p>
                    <div className="flex flex-row items-center gap-2">
                        <User
                            color="black"
                            className="w-4 h-4 bg-transparent shadow-lg"
                        />
                        <p className="text-sm font-montserrat font-semibold text-shadow-lg">
                            {eventType}
                        </p>
                    </div>
                    <Link
                        href={RSVP}
                        className="text-[#4a4a4a] font-montserrat text-xl underline font-bold text-shadow-lg"
                    >
                        RSVP
                    </Link>
                </div>
                <div className="text-base font-quicksand font-semibold text-shadow-lg">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default EventsEvent;
