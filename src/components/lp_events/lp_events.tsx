'use client';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LP_Event from "./lp_event";
import EventInterface from "@/interfaces/eventInterface";
import { getEvents } from "@/server/events.server";
import { sanitizeQuotes } from '@/libs/sanitizeQuotes';

const LP_Events = () => {
    const [events, setEvents] = useState<EventInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const isMobileDevice = useMediaQuery({query: "(max-width: 767px)"});

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents: EventInterface[] = await getEvents();
                const sanitizedEvents = fetchedEvents.map(event => ({
                    ...event,
                    name: sanitizeQuotes(event.name),
                    description: sanitizeQuotes(event.description),
                }));
                setEvents(sanitizedEvents);
            } catch (error) {
                console.error("Failed to fetch events on the landing page:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (isLoading) {
        return <p className="text-center font-normal text-gray-700">Loading events...</p>;
    }

    if (!isLoading && events.length === 0) {
        return (
            <p className="text-center text-gray-700 font-normal">
                No events available at the moment.
            </p>
        );
    }

    return (
        <section aria-label="Events Section" className="py-4 flex flex-col xl:flex-row gap-8 sm:gap-4 justify-between 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]">
            <div className='flex-1 flex flex-col justify-between'>
                <h2 className=" text-2xl xl:text-5xl font-bold font-montserrat pb-4">Upcoming Events</h2>
                <div className='flex flex-col sm:flex-row justify-between gap-8 lg:gap-10 xl:gap-8 pb-4 sm:h-[250px] lg:h-[300px] xl:h-[325px] overflow-hidden'>
                    {isMobileDevice && events.length > 0
                        ? events.map((meetup, index) => (
                            index < 2 && <LP_Event key={meetup.id} name={meetup.name} date={meetup.date} description={meetup.shortIntro} iconName={meetup.iconName} index={index} />
                        ))
                        : events.map((meetup, index) => (
                            index < 3 && <LP_Event key={meetup.id} name={meetup.name} date={meetup.date} description={meetup.shortIntro} iconName={meetup.iconName} index={index}/>
                        ))}
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <Link href="/events" className=' '>
                        <p className='font-medium text-xl font-montserrat underline text-[var(--color-primary-blue)]'>View All Events</p>
                    </Link>
                    <div className='bg-[var(--event-pill-backgroundcolor)] py-2 px-6 shadow-md'>
                        <p className='text-center font-montserrat text-sm'>{events.length} total</p>
                    </div>
                </div>
            </div>
            <div className='sm:hidden xl:block'>
                <Image 
                    src="/images/community_1.png" 
                    alt="Community event" 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md w-full h-auto md:size-fit"
                />
            </div>
        </section>
    )
}

export default LP_Events;