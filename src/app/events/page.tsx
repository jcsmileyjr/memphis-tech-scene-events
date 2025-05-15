import Nav from "@/components/nav/nav";
import Teaser from "@/components/teaser/teaser";

const EventsPage = () => {
    return (
        <div className="min-h-screen gap-16 font-quicksand">
            <Nav />
            <main className="flex flex-col">
                <Teaser />
            </main>
        </div>
    );
}

export default EventsPage;