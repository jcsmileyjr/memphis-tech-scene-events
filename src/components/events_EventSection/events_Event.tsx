import Link from "next/link";
import { User } from 'lucide-react';

const EventsEvent = () => {
    return (
        <div className="flex flex-row gap-2 w-full">
            <div className="bg-[var(--color-primary-blue)] text-white font-montserrat flex flex-col items-center justify-center p-2 rounded-lg shadow-lg">
                <p className="font-bold text-shadow-lg">May 28</p>
                <p className="font-normal text-shadow-lg">12PM</p>
            </div>
            <div className="flex flex-col flex-1 w-full">
                <div className="flex flex-row justify-between items-center ">
                    <p className="text-xl font-montserrat font-medium text-[var(--color-primary-blue)] text-shadow-lg">Code Connector: Virtual Lunch!</p>
                    <p className="bg-[var(--nav-backgroundcolor)] text-black text-sm font-montserrat px-4 py-2 rounded-sm shadow-lg">Networking</p>
                    <div className="flex flex-row items-center gap-2">
                        <User color="black" className='w-4 h-4 bg-transparent shadow-lg' />
                        <p className="text-sm font-montserrat font-semibold text-shadow-lg">Virtual</p>
                    </div>
                    <Link href="/events" className="cursor-not-allowed text-[#4a4a4a] font-montserrat text-xl underline font-bold text-shadow-lg">RSVP</Link>
                </div>
                <div className="text-base font-quicksand font-semibold text-shadow-lg">Grab your lunch, log on, and meet other tech professionals in the Memphis dev scene.</div>
            </div>
        </div>
    );
}

export default EventsEvent;