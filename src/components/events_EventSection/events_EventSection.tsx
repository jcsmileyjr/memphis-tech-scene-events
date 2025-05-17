"use client";
import EventsEvent from "./events_Event";
import EventInterface from "@/interfaces/eventInterface";
import EventsFilter from "./events_Filter";
import { getEvents } from "@/server/events.server";
import { sanitizeQuotes } from "@/libs/sanitizeQuotes";
import { useEventFilter } from "@/Context/EventFilterContext";
import { useEffect, useState } from "react";

const EventsEventSection = () => {
    const { filter } = useEventFilter();
    const [sanitizedEvents, setSanitizedEvents] = useState<EventInterface[]>(
        []
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents: EventInterface[] = await getEvents();
                setSanitizedEvents(
                    fetchedEvents.map((event) => ({
                        ...event,
                        name: sanitizeQuotes(event.name),
                        description: sanitizeQuotes(event.description),
                    }))
                );
            } catch (error) {
                console.error("Failed to fetch events:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents =
        filter === "All Events"
            ? sanitizedEvents
            : sanitizedEvents.filter(
                (event) =>
                    event.eventCategory?.toLowerCase() ===
                        filter.toLowerCase() ||
                    event.eventType?.toLowerCase() === filter.toLowerCase()
            );

    return (
        <section
            aria-label="Events"
            className="flex flex-col sm:flex-row gap-2 px-4 xl:px-12 py-4"
        >
            <EventsFilter />
            <div className="flex flex-col gap-8 flex-1 sm:flex-3 lg:flex-5">
                {loading ? (
                    <p className="text-center font-normal text-gray-700">
                        Loading events...
                    </p>
                ) : filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventsEvent key={event.id} {...event} />
                    ))
                ) : (
                    <p className="text-center font-normal text-gray-700">
                        No events found.
                    </p>
                )}
            </div>
        </section>
    );
};

export default EventsEventSection;
