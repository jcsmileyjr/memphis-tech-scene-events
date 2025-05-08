import Image from 'next/image';
import { BugPlay } from 'lucide-react';

const LP_Event = ({ name, date, description }: { name: string, date: string, description: string }) => {
    return (
        <div className='flex-1 h-full border-[#D9D9D9] border p-4 flex flex-col justify-between font-quicksand font-normal rounded-lg shadow-md'>
            <BugPlay size={48} />
            <p className='font-bold text-xl font-montserrat'>{name}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

const events = [
    { id: 1, name: "Memphis Python User Group", date: "April 28, 2025", description: "Let’s Talk Ollama” tech talk by Douglas Starnes" },
    { id: 2, name: "Memphis Tech Luncheon", date: "April 30, 2025", description: "Lunch is at Epicenter Memphis" },
    { id: 3, name: "Memphis AI/AR Meetup", date: "April 30, 2025", description: "An Manifesto for AI in Memphis" },
];

const LP_Events = () => {
    return (
        <section className="py-4 px-4 xl-px-12 flex flex-row gap-4 justify-between">
            <div className='flex-1'>
                <h2 className="text-5xl font-bold font-montserrat pb-4">Upcoming Events</h2>
                <div className='flex flex-row justify-between gap-8 pb-4 h-[280px]'>
                {events.map((meetup) => (
                    <LP_Event key={meetup.id} name={meetup.name} date={meetup.date} description={meetup.description} />
                ))}
                </div>
                <p className='font-medium text-xl font-montserrat'>View All Events</p>
            </div>
            <div>
                <Image 
                    src="/images/community_1.png" 
                    alt="Community event" 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md" 
                />
            </div>
        </section>
    )
}

export default LP_Events;