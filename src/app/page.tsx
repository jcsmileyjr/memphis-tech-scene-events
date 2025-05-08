import Nav from "@/components/nav/nav";
import Teaser from "@/components/teaser/teaser";
import LP_Testimonials from "@/components/testimonials/lp_testimonials";
import LP_Events from "@/components/events/lp_events";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 gap-16 font-quicksand">
      <Nav />
      <main className="flex flex-col px-4 gap-2">
        <Teaser />
        <LP_Testimonials />
        <LP_Events />
      </main>
    </div>
  );
}
