

const Teaser = () => {
    return (
        <section aria-label="Teaser Section" className="flex flex-col gap-2 m-auto py-4 text-xl">
            <div className="text-[var(--color-primary-blue)] uppercase font-bold">
                Single source 
                <span className="font-normal lowercase text-black px-2">of</span> 
                truth 
            </div>
            <div className="font-base lowercase text-black pl-24 sm:pl-24">
                for<span className="hidden sm:inline"> upcoming</span>
                <span className="text-[var(--color-primary-blue)] uppercase font-bold px-2">tech 
                    <span className="hidden sm:inline pl-2">events</span>
                </span>
                in <span className="capitalize">Memphis</span>
            </div>
        </section>
    );
}

export default Teaser;