'use client";'
import Nav from "@/components/nav/nav";
import Teaser from "@/components/teaser/teaser";
import Image from "next/image";
import EventsEventSection from "@/components/events_EventSection/events_EventSection";
import { EventFilterProvider } from "@/Context/EventFilterContext";
const EventsPage = () => {
    return (
        <div className="min-h-screen gap-16 font-quicksand">
            <Nav />
            <main className="flex flex-col">
                <div className="flex flex-row pb-2 px-4 xl:px-12">
                    <Image
                        src="/images/coder-logo.png"
                        alt="Logo"
                        width={1000}
                        height={500}
                        className="w-20 h-20 object-cover hidden sm:block"
                    />
                    <Teaser />
                </div>
                <EventFilterProvider>
                    <EventsEventSection />
                </EventFilterProvider>
            </main>
        </div>
    );
}

export default EventsPage;