"use client";
import { Menu } from 'lucide-react';
import {useState} from 'react';

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleMenu = () => {
        setExpanded(!expanded);
    }

    return (
        <nav className={`flex flex-row  ${expanded ? 'relative items-start justify-end' : 'items-center justify-between'}`}>
            <ul onClick={handleToggleMenu} className={`lg:hidden lg:flex flex-row flex-wrap gap-4 text-xl font-[family-name:var(--font-quicksand)] ${expanded ? ' absolute top-0 left-0 z-50 bg-white pt-8' : 'hidden'}`}>
                <li className="text-[var(--color-primary-blue)] font-bold font-[family-name:var(--font-montserrat)]">Home</li>
                <li className="menu-item">Events</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Sponsors</li>
                <li className="menu-item">Collaborator</li>
                <li className="menu-item">Testimonials</li>
            </ul>
            <Menu onClick={handleToggleMenu} className={`lg:hidden ${expanded ? 'hidden' : 'block'}`} />
            <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl sm:text-3xl lg:text-4xl z-50">Memphis Tech Scene</h1>
        </nav>
    )
}
export default Nav;