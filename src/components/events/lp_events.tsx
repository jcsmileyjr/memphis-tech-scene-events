'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LP_Event from "./lp_event";
import { useMediaQuery } from 'react-responsive';
import { getEvents } from "@/server/events.server";
import EventInterface from "@/interfaces/eventInterface";

const events = [
    { id: 1, name: "Memphis Python User Group", date: "April 28, 2025", description: "Let’s Talk Ollama” tech talk by Douglas Starnes" },
    { id: 2, name: "Memphis Tech Luncheon", date: "April 30, 2025", description: "Lunch is at Epicenter Memphis" },
    { id: 3, name: "Memphis AI/AR Meetup", date: "April 30, 2025", description: "An Manifesto for AI in Memphis" },
];

const LP_Events = () => {
    const [events, setEvents] = useState<EventInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents: EventInterface[] = await getEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (isLoading) {
        return <p className="text-center font-normal text-gray-700">Loading events...</p>;
    }

    return (
        <section aria-label="Events Section" className="py-4 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between">
            <div className='flex-1 flex flex-col justify-between'>
                <h2 className=" text-2xl xl:text-5xl font-bold font-montserrat pb-4">Upcoming Events</h2>
                <div className='flex flex-col lg:flex-row justify-between gap-8 pb-4  lg:h-[280px]'>
                    {isTabletOrMobile && events.length > 0
                        ? events.map((meetup, index) => (
                            index < 2 && <LP_Event key={meetup.id} name={meetup.name} date={meetup.date} description={meetup.description} iconName={meetup.iconName} />
                        ))
                        : events.map((meetup) => (
                            <LP_Event key={meetup.id} name={meetup.name} date={meetup.date} description={meetup.description} iconName={meetup.iconName} />
                        ))}
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <p className='font-medium text-xl font-montserrat'>View All Events</p>
                    <div className='bg-[var(--event-pill-backgroundcolor)] py-2 px-6 shadow-md'>
                        <p className='text-center font-montserrat text-sm'>15 total</p>
                    </div>
                </div>
            </div>
            <div className=''>
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