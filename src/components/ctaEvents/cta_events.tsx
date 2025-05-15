import Image from 'next/image';

const CTAEvents = () => {
    return (
        <section className="flex flex-col-reverse gap-4 md:flex-row-reverse md:gap-8 lg:flex-row xl:gap-0 justify-between items-center pt-8">
            <div className='flex-1 flex justify-center items-center mt-4 lg:mt-0'>
                <Image 
                    src="/images/community_2.jpeg" 
                    alt="Community event" 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md w-full h-auto md:size-fit" 
                />
            </div>
            <div className='flex-1 flex flex-col'>
                <p className="text-xl font-bold font-quicksand">
                    Got an upcoming tech event? Let&#39;s get it seen, shared, and celebrated! Submit it now and we&#39;ll 
                    <span className="text-[var(--color-primary-blue)]"> blast it across our newsletter, socials, and community.</span> Because we believe that great ideas deserve to be supported.
                </p>
                <div className='flex justify-center items-center mt-4'>
                    <button type='button' className="w-2/3 lg:w-1/2 xl:w-1/3 bg-[var(--color-primary-blue)] font-montserrat text-white font-bold text-xl px-4 py-2 rounded-md transition hover:bg-white hover:text-[var(--color-primary-blue)]   duration-300 ease-in-out">
                        Submit Event    
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTAEvents;