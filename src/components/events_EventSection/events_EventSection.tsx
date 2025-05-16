import EventsEvent from "./events_Event";
import EventInterface from "@/interfaces/eventInterface";
import EventsFilter from "./events_Filter";
import { getEvents } from "@/server/events.server";
import { sanitizeQuotes } from '@/libs/sanitizeQuotes';

const EventsEventSection = async () => {
    let sanitizedEvents: EventInterface[] = [];
    try {
        const fetchedEvents: EventInterface[] = await getEvents();
        sanitizedEvents = fetchedEvents.map(event => ({
            ...event,
            name: sanitizeQuotes(event.name),
            description: sanitizeQuotes(event.description),
        }));
        //setEvents(sanitizedEvents);
    } catch (error) {
        console.error("Failed to fetch events:", error);
    } finally {
        //setIsLoading(false);
    }
    return (
        <section aria-label="Events" className="flex flex-col sm:flex-row gap-2 px-4 xl:px-12 py-4">
            <EventsFilter />
            <div className="flex flex-col gap-8 flex-1 sm:flex-3 lg:flex-5">
                {
                    sanitizedEvents.length > 0
                        ? sanitizedEvents.map((event) => (
                            <EventsEvent key={event.id} {...event} />
                        ))
                        : <p className="text-center font-normal text-gray-700">No events found.</p>
                }
            
            </div>
        </section>
    )
}

export default EventsEventSection;