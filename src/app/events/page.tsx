import Nav from "@/components/nav/nav";
import Teaser from "@/components/teaser/teaser";
import Image from "next/image";
import Link from "next/link";
import { User } from 'lucide-react';

const EventsPage = () => {
    return (
        <div className="min-h-screen gap-16 font-quicksand">
            <Nav />
            <main className="flex flex-col">
                <div className="flex flex-row pb-2 px-4 xl:px-12">
                    <Image
                        src="/images/coder-logo.png"
                        alt="Logo"
                        width={1000}
                        height={500}
                        className="w-20 h-20 object-cover hidden sm:block"
                    />
                    <Teaser />
                </div>
                <div className="flex flex-row gap-2 px-4 xl:px-12 py-4">
                    <div className="hidden sm:flex flex-1 bg-black text-white">Filter: WIP</div>
                    <div className="flex flex-1 sm:flex-3 lg:flex-5">
                        <div className="flex flex-row gap-2 w-full">
                            <div className="bg-[var(--color-primary-blue)] text-white font-montserrat flex flex-col items-center justify-center p-2 rounded-lg shadow-lg">
                                <p className="font-bold text-shadow-lg">May 28</p>
                                <p className="font-normal text-shadow-lg">12PM</p>
                            </div>
                            <div className="flex flex-col flex-1 w-full">
                                <div className="flex flex-row justify-between items-center ">
                                    <p className="text-xl font-montserrat font-medium text-[var(--color-primary-blue)] text-shadow-lg">Code Connector: Virtual Lunch!</p>
                                    <p className="bg-[var(--nav-backgroundcolor)] text-black text-sm font-montserrat px-4 py-2 rounded-sm shadow-lg">Networking</p>
                                    <div className="flex flex-row items-center gap-2">
                                        <User color="black" className='w-4 h-4 bg-transparent shadow-lg' />
                                        <p className="text-sm font-montserrat font-semibold text-shadow-lg">Virtual</p>
                                    </div>
                                    <Link href="/events" className="cursor-not-allowed text-[#4a4a4a] font-montserrat text-xl underline font-bold text-shadow-lg">RSVP</Link>
                                </div>
                                <div className="text-base font-quicksand font-semibold text-shadow-lg">Grab your lunch, log on, and meet other tech professionals in the Memphis dev scene.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default EventsPage;