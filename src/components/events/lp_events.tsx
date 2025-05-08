import Image from 'next/image'

const LP_Events = () => {
    return (
        <section className="py-4 px-4 xl-px-12 flex flex-row gap-4 justify-between">
            <div>
                <h2 className="text-5xl font-bold font-montserrat">Upcoming Events</h2>
                <p className="font-base lowercase text-black pl-4 sm:pl-8">Check out the latest events in Memphis</p>
            </div>
            <div>
                <Image 
                    src="/images/community_1.png" 
                    alt="Community event" 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md" 
                />
            </div>
        </section>
    )
}

export default LP_Events;