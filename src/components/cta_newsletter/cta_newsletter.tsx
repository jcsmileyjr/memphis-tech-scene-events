import Image from 'next/image';

const CTA_Newsletter = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center pb-8 pt-8 gap-4 lg:gap-0">
            <div className='w-full flex flex-col lg:flex-row gap-4 flex-1 justify-center'>
                <div className='flex flex-row justify-between lg:justify-center items-center'>
                    <Image 
                        src="/images/coder-logo.png" 
                        alt="Newsletter logo" 
                        height={100}
                        width={100}
                        className="rounded-lg h-24 w-24 lg:w-48 lg:h-48" 
                    />
                    <p className='block lg:hidden font-bold text-2xl lg:text-5xl'>Stay in the loop!</p>
                </div>
                <div className='flex flex-col justify-between font-montserrat'>
                    <p className='hidden lg:block font-bold text-2xl lg:text-5xl'>Stay in the loop!</p>
                    <p className='text-xl font-medium lg:font-semibold'>Subscribe to our newsletter</p>
                    <button type='button' className=" text-[var(--color-primary-blue)] bg-white font-bold text-xl px-2 py-2 rounded-md mt-4 border-1 border-solid border-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition duration-300 ease-in-out">
                        Subscribe   
                    </button>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center mt-4 lg:mt-0'>
                <Image 
                    src="/images/community_4.jpg" 
                    alt="Community event" 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md" 
                />
            </div>
        </section>
    )
}

export default CTA_Newsletter;