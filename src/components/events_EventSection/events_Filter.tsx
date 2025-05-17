"use client";
import { useEventFilter } from "@/Context/EventFilterContext";

const FILTERS = [
    "All Events",
    "AI",
    "Data",
    "Entrepreneur",
    "Networking",
    "Tech Workshops",
    "Virtual",
    "Tech Talk",
    "In-Person",
];

const EventsFilter = () => {
    const { filter, setFilter } = useEventFilter();

    return (
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-col sm:items-start flex-row flex-1 gap-4 font-quicksand text-base sm:text-xl">
            <p className="font-bold">Filters:</p>
            {FILTERS.map((f) => (
                <button
                    key={f}
                    type="button"
                    className={
                        filter === f
                            ? "text-[var(--color-primary-blue)] font-bold underline cursor-pointer"
                            : "cursor-pointer"
                    }
                    aria-label={`Filter events to show only ${f.toLowerCase()}`}
                    onClick={() => setFilter(f)}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};

export default EventsFilter;
