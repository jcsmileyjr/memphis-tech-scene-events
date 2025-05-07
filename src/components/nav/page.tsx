"use client";
import { Menu } from 'lucide-react';
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

const Nav = () => {
    const [expanded, setExpanded] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });

    const handleToggleMenu = () => {
        if (isTabletOrMobile) {
            setExpanded(!expanded);
        }
    }

    return (
        <nav className={`flex flex-row px-8 py-2 bg-[var(--nav-backgroundcolor)] ${expanded ? 'relative items-start justify-end' : 'items-center justify-between'}`}>
            <ul onClick={handleToggleMenu} className={` xl:flex flex-row flex-wrap gap-4 text-xl font-[family-name:var(--font-quicksand)] ${expanded ? ' absolute top-0 left-0 z-50 bg-transparent pt-12 sm:pt-14 ml-4' : 'hidden'}`}>
                <li className="bg-white xl:bg-transparent text-[var(--color-primary-blue)] font-bold font-[family-name:var(--font-montserrat)]">Home</li>
                <li className="menu-item bg-white xl:bg-transparent">Events</li>
                <li className="menu-item bg-white xl:bg-transparent">About</li>
                <li className="menu-item bg-white xl:bg-transparent">Sponsors</li>
                <li className="menu-item bg-white xl:bg-transparent">Collaborator</li>
                <li className="menu-item bg-white xl:bg-transparent">Testimonials</li>
            </ul>
            <Menu onClick={handleToggleMenu} className={`xl:hidden ${expanded ? 'hidden' : 'block'}`} />
            <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl sm:text-3xl xl:text-4xl z-50">Memphis Tech Scene</h1>
        </nav>
    )
}
export default Nav;