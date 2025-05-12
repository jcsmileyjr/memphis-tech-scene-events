import { getSponsors } from "@/server/sponspors.server";
import SponorInterface from "@/interfaces/sponsorInterface";
import LpSponor from "./lp_sponor";

const LpSponors = async () => {
    const sponsors: SponorInterface[] = await getSponsors();

    return (
        <section className="flex flex-col pt-8">
            <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">Our Sponsors</h2>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                {sponsors.length === 0 && (
                    <p className="text-center text-gray-700 font-normal">
                        No sponsors available at the moment.
                    </p>
                )}

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