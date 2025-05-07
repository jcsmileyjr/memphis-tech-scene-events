"use client";
import { Menu } from 'lucide-react';
import {useState} from 'react';

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleMenu = () => {
        setExpanded(!expanded);
    }

    return (
        <nav className={`flex flex-row px-8 bg-[var(--nav-backgroundcolor)] ${expanded ? 'relative items-start justify-end' : 'items-center justify-between'}`}>
            <ul onClick={handleToggleMenu} className={`hideen lg:flex flex-row flex-wrap gap-4 text-xl font-[family-name:var(--font-quicksand)] ${expanded ? ' absolute top-0 left-0 z-50 bg-transparent pt-8 sm:pt-10 ml-4' : 'hidden'}`}>
                <li className="bg-white lg:bg-transparent text-[var(--color-primary-blue)] font-bold font-[family-name:var(--font-montserrat)]">Home</li>
                <li className="menu-item bg-white lg:bg-transparent">Events</li>
                <li className="menu-item bg-white lg:bg-transparent">About</li>
                <li className="menu-item bg-white lg:bg-transparent">Sponsors</li>
                <li className="menu-item bg-white lg:bg-transparent">Collaborator</li>
                <li className="menu-item bg-white lg:bg-transparent">Testimonials</li>
            </ul>
            <Menu onClick={handleToggleMenu} className={`lg:hidden ${expanded ? 'hidden' : 'block'}`} />
            <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl sm:text-3xl lg:text-4xl z-50">Memphis Tech Scene</h1>
        </nav>
    )
}
export default Nav;