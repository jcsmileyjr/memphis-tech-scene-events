import Nav from "@/components/nav/nav";
import Teaser from "@/components/teaser/teaser";
import LP_Testimonials from "@/components/testimonials/lp_testimonials";
import LP_Events from "@/components/events/lp_events";
import CTAEvents from "@/components/ctaEvents/cta_events";
import CTA_Newsletter from "@/components/cta_newsletter/cta_newsletter";
import LpSponors from "@/components/lp_sponors/lp_sponors";
import LpPartners from "@/components/lp_partners/lp_partners";

export default function Home() {
  return (
    <div className=" min-h-screen gap-16 font-quicksand">
      <Nav />
      <main className="flex flex-col">
        <div className="flex flex-col gap-2 px-4 xl:px-12">
          <Teaser />
          <LP_Testimonials />
          <LP_Events />
        </div>
        <div className="bg-[var(--landingpage-submitevent-backgroundcolor)] pb-2 px-4 xl:px-12 w-full">
          <CTAEvents />
          <CTA_Newsletter />
        </div>
        <div className="bg-[var(--landingpage-sponsor-backgroundcolor)] text-white pb-2 px-4 xl:px-12 w-full">
          <LpSponors />
          <LpPartners />
        </div>
      </main>
    </div>
  );
}
