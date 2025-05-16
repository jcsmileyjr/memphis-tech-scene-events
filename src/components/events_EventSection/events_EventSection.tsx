import EventsEvent from "./events_Event";

const EventsEventSection = () => {
    return (
        <section aria-label="Events" className="flex flex-row gap-2 px-4 xl:px-12 py-4">
            <div className="hidden sm:flex flex-1 bg-black text-white">Filter: WIP</div>
            <div className="flex flex-1 sm:flex-3 lg:flex-5">
                <EventsEvent />
            </div>
        </section>
    )
}

export default EventsEventSection;