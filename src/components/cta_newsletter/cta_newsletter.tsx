import Image from "next/image";
import Link from "next/link";

const CTA_Newsletter = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse md:gap-8 lg:flex-row justify-between items-center pb-8 pt-8 gap-4 md:gap-0 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]">
            <div className="w-full flex flex-col md:flex-row gap-4 flex-1 justify-center">
                <div className="flex flex-row justify-between md:justify-center items-center">
                    <Image
                        src="/images/coder-logo.png"
                        alt="Newsletter logo"
                        height={100}
                        width={100}
                        className="rounded-lg h-24 w-24 md:w-32 md:h-32 xl:w-48 xl:h-48"
                    />
                    <p className="block md:hidden font-bold text-2xl md:text-5xl">
                        Stay in the loop!
                    </p>
                </div>
                <div className="flex flex-col justify-between font-montserrat">
                    <p className="hidden md:block font-bold text-2xl md:text-3xl xl:text-5xl">
                        Stay in the loop!
                    </p>
                    <p className="text-xl font-medium md:font-semibold">
                        Subscribe to our newsletter
                    </p>
                    <iframe
                        src="https://embeds.beehiiv.com/f33c038a-7b86-4e34-b347-e0e27d4ff7fb?slim=true"
                        data-test-id="beehiiv-embed"
                        height="52"
                        className="border-radius-4 border-0 w-full bg-transparent"
                    ></iframe>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
                <Image
                    src="/images/community_4.jpg"
                    alt="Community event"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                />
            </div>
        </section>
    );
};

export default CTA_Newsletter;
