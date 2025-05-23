import { getPartners } from "@/server/partners.server";
import PartnerInterface from "@/interfaces/partnerInterface";
import { sanitizeQuotes } from "@/libs/sanitizeQuotes";

const LpPartners = async () => {
    let partners: PartnerInterface[] = [];
    let fetchError = false;

    try {
        partners = await getPartners();

        for (let i = 0; i < partners.length; i++) {
            partners[i].name = sanitizeQuotes(partners[i].name);
        }
    } catch (error) {
        console.error("Failed to fetch partners:", error);
        fetchError = true;
    }

    if (fetchError) {
        return (
            <section
                id="partners"
                aria-label="Partners Section"
                className="flex flex-col pt-8 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]"
            >
                <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">
                    Our Partners
                </h2>
                <p className="text-center text-red-700 font-normal" role="alert">
                    Failed to load partners. Please try again later.
                </p>
            </section>
        );
    }    

    if (partners.length === 0) {
        return (
            <section
                id="partners"
                aria-label="Partners Section"
                className="flex flex-col pt-8"
            >
                <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">
                    Our Partners
                </h2>
                <p className="text-center text-white font-normal">
                    No partners available at the moment.
                </p>
            </section>
        );
    }

    return (
        <section
            id="partners"
            aria-label="Partners Section"
            className="flex flex-col pt-8 text-base sm:text-xl gap-y-4 pb-8 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]"
        >
            <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">
                Our Partners
            </h2>
            <p className="font-medium">
                The Memphis tech community shines so brightly because of the
                incredible, unwavering dedication of individuals and
                organizations, such as these, who tirelessly teach, empower, and
                uplift one another.
            </p>
            <p className="font-normal">
                &ldquo;Alone we can do so little; together we can do so
                much.&rdquo; — Helen Keller
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-y-8 mt-8">
                {partners.map((partner) => (
                    <p
                        key={partner.id}
                        className="font-montserrat w-full sm:w-1/2"
                    >
                        {partner.name}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default LpPartners;
