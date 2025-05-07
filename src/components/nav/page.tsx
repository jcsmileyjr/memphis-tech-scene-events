"use client";
import { Menu } from 'lucide-react';
import {useState} from 'react';

const Nav = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggleMenu = () => {
        console.log(expanded);
        setExpanded(!expanded);
    }

    return (
        <nav className={`flex flex-row justify-between ${expanded ? 'items-start' : 'items-center'}`}>
            <ul className="hidden lg:flex flex-row flex-wrap gap-4 text-xl font-[family-name:var(--font-quicksand)]">
                <li className="text-[var(--color-primary-blue)] font-bold font-[family-name:var(--font-montserrat)]">Home</li>
                <li className="menu-item">Events</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Sponsors</li>
                <li className="menu-item">Collaborator</li>
                <li className="menu-item">Testimonials</li>
            </ul>
            <ul onClick={handleToggleMenu} className={`lg:hidden ${expanded ? 'flex flex-col' : 'hidden'}`}>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
            </ul>
            <Menu onClick={handleToggleMenu} className={`lg:hidden ${expanded ? 'hidden' : 'block'}`} />
            <h1 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl sm:text-3xl lg:text-4xl">Memphis Tech Scene</h1>
        </nav>
    )
}
// <button className="bg-[var(--color-primary-blue)] text-white px-4 py-2 rounded-md font-[family-name:var(--font-montserrat)]">Subscribe</button>
export default Nav;