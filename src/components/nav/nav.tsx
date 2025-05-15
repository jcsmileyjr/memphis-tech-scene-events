"use client";
import { Menu } from 'lucide-react';
import {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

const Nav = () => {
    const pageLocation = usePathname();
    const [expanded, setExpanded] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });

    const handleToggleMenu = () => {
        if (isTabletOrMobile) {
            setExpanded(prev => !prev);
        }
    }

    return (
        <nav aria-label="Main Navigation" className={`flex flex-row justify-between items-center px-4 xl:px-12 py-2 bg-[var(--nav-backgroundcolor)] ${expanded ? 'relative' : ' '}`}>
            <ul onClick={handleToggleMenu} className={` xl:flex flex-row flex-wrap gap-4 text-xl font-quicksand ${expanded ? ' absolute top-0 left-0 z-50 bg-[var(--nav-backgroundcolor-dark)] pt-14 pb-8 w-full flex flex-col justify-center items-center' : 'hidden'}`}>
                <li aria-current={pageLocation === '/' ? 'page' : undefined} className={`${pageLocation==='/' ? 'cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent text-[var(--color-primary-blue)] font-bold font-montserrat hover:text-[var(--color-primary-blue)] hover:underline':'menu-item cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent hover:text-[var(--color-primary-blue)] hover:underline'}`}>
                    <Link href="/">Home</Link>
                </li>
                <li aria-current={pageLocation === '/' ? 'page' : undefined} className={`${pageLocation==='/events' ? 'cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent text-[var(--color-primary-blue)] font-bold font-montserrat hover:text-[var(--color-primary-blue)] hover:underline':'menu-item cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent hover:text-[var(--color-primary-blue)] hover:underline'}`}>
                    <Link href="/events">Events</Link>
                </li>
                <li aria-current={pageLocation === '/' ? 'page' : undefined} className="menu-item cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent hover:text-[var(--color-primary-blue)] hover:underline">About</li>
                <li aria-current={pageLocation === '/' ? 'page' : undefined} className="menu-item cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent hover:text-[var(--color-primary-blue)] hover:underline">Sponsors</li>
                <li aria-current={pageLocation === '/' ? 'page' : undefined} className="menu-item cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent hover:text-[var(--color-primary-blue)] hover:underline">Collaborator</li>
                <li aria-current={pageLocation === '/' ? 'page' : undefined} className="menu-item cursor-pointer bg-[var(--nav-backgroundcolor-dark)] xl:bg-transparent hover:text-[var(--color-primary-blue)] hover:underline">Testimonials</li>
            </ul>
            <button
                type="button"
                onClick={handleToggleMenu}
                aria-label="Toggle navigation menu"
                className="z-50 xl:hidden"
            >
                <Menu />
            </button>
            <h1 className="font-montserrat font-bold text-xl sm:text-3xl xl:text-4xl z-50">Memphis Tech Scene</h1>
        </nav>
    )
}
export default Nav;