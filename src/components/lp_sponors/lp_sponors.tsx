import { getSponsors } from "@/server/sponsors.server";
import SponorInterface from "@/interfaces/sponsorInterface";
import LpSponor from "./lp_sponor";
import { sanitizeQuotes } from "@/libs/sanitizeQuotes";

const LpSponors = async () => {
    let sponsors: SponorInterface[] = [];
    try {
        sponsors = await getSponsors();

        for (let i = 0; i < sponsors.length; i++) {
            sponsors[i].organization = sanitizeQuotes(sponsors[i].organization);
            sponsors[i].description = sanitizeQuotes(sponsors[i].description);
        }
    } catch (error) {
        console.error("Failed to fetch sponsors:", error);
    }

    if (sponsors.length === 0) {
        return (
            <section id="sponsors"  aria-label="Sponsors Section" className="flex flex-col pt-8">
                <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">Our Sponsors</h2>
                <p className="text-center text-gray-700 font-normal">No sponsors available at the moment.</p>
            </section>
        );
    }

    return (
        <section id="sponsors" aria-label="Sponsors Section" className="flex flex-col pt-8">
            <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">Our Sponsors</h2>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                {sponsors.length > 0 && sponsors.map((sponsor) => (
                    <LpSponor 
                        key={sponsor.id} 
                        organization={sponsor.organization} 
                        description={sponsor.description} 
                    />
                ))}
            </div>
        </section>
    )
}

export default LpSponors;