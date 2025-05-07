

const Teaser = () => {
    return (
        <section className="flex flex-col gap-2 m-auto py-4 text-xl">
            <div className="text-[var(--color-primary-blue)] uppercase font-bold">
                Single source 
                <span className="font-normal lowercase text-black px-2">of</span> 
                truth 
            </div>
            <div className="font-base lowercase text-black pl-4 sm:pl-8">
                for upcoming
                <span className="text-[var(--color-primary-blue)] uppercase font-bold px-2">tech 
                    <span className="hidden sm:inline pl-2">events</span>
                </span>
                in <span className="capitalize">Memphis</span>
            </div>
        </section>
    );
}

export default Teaser;