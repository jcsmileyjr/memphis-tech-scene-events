import Image from 'next/image';

const CTA_Newsletter = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center pb-8 pt-8 gap-4 lg:gap-0">
            <div className='flex flex-col lg:flex-row gap-4 flex-1 justify-end'>
                <div className='flex justify-center items-center'>
                    <Image 
                        src="/images/coder-logo.png" 
                        alt="Newsletter logo" 
                        width={200} 
                        height={100} 
                        className="rounded-lg" 
                    />
                </div>
                <div className='flex flex-col justify-between font-montserrat'>
                    <p className='font-bold text-2xl lg:text-4xl'>Stay in the loop!</p>
                    <p className='text-xl font-semibold'>Subscribe to our newsletter</p>
                    <button type='button' className=" text-[var(--color-primary-blue)] bg-white font-bold text-xl px-2 py-2 rounded-md mt-4 border-1 border-solid border-[var(--color-primary-blue)] hover:bg-[var(--color-primary-blue)] hover:text-white transition duration-300 ease-in-out">
                        Subscribe   
                    </button>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <Image 
                    src="/images/community_3.jpg" 
                    alt="Community event" 
                    width={350} 
                    height={300} 
                    className="rounded-lg shadow-md" 
                />
            </div>
        </section>
    )
}

export default CTA_Newsletter;