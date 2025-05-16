

const EventsFilter = () => {
    return (
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-col sm:items-start flex-row flex-1 gap-4 font-quicksand text-base sm:text-xl">
            <p className="font-bold">Filters:</p>
            <button aria-current={true} type="button" className="text-[var(--color-primary-blue)] font-bold" aria-label="Filter events to show all events">All Events</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only AI events">AI</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only data events">Data</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only entrepreneur events">Entrepreneur</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only networking events">Neworking</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only tech workshop events">Tech Workshops</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only virtual events">Virtual</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only tech talk events">Tech Talks</button>
            <button aria-current={false} type="button" className="" aria-label="Filter events to show only in-person events">In-Person</button>
        </div>
    )
}

export default EventsFilter;

