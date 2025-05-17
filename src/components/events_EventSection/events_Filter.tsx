"use client";
import { useEventFilter } from "@/Context/EventFilterContext";
import fakeEvents from "@/data/fakeEvents";

const categories = Array.from(
    new Set(fakeEvents.map(event => event.eventCategory).filter(Boolean))
);
const types = fakeEvents.map(event => event.eventType).filter(Boolean);
const uniqueFilters = Array.from(new Set([...categories, ...types]));
const FILTERS = ["All Events", ...uniqueFilters];

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
