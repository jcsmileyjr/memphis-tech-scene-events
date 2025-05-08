import { BugPlay } from 'lucide-react';

interface EventProps {
    name: string;
    date: string;
    description: string;
}

const LP_Event = ({ name, date, description }: EventProps) => {
    return (
        <div className='flex-1 h-full border-[#D9D9D9] border p-4 flex flex-col justify-between font-quicksand font-normal rounded-lg shadow-md'>
            <BugPlay size={48} />
            <p className='font-bold text-normal xl:text-xl font-montserrat'>{name}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default LP_Event;