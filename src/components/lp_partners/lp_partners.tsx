
const partners = [
    {
        id: 1,
        name: "Memphis Data Professionals",
    },
    {
        id: 2,
        name: "Code Connector",
    },
    {
        id: 3,
        name: "Memphis .Net and Azure User Group",
    },
    {
        id: 4,
        name: "Memphis Python User group",
    },
];

const LpPartners = () => {
    return (
        <section aria-label="Partners Section" className="flex flex-col pt-8">
            <h2 className="text-2xl xl:text-5xl font-bold font-montserrat pb-4">Our Partners</h2>
            <div className="flex flex-row flex-wrap justify-between items-center">
                {partners.map((partner) => (
                    <p key={partner.id} className="font-montserrat text-xl w-1/2">{partner.name}</p>
                ))}
            </div>
        </section>
    )
}

export default LpPartners;