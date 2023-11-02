import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IarcaneAttend, Iattendease } from '../svgs/logo';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BiSun, BiMoon } from "react-icons/bi";
import { navLinks } from '../../data/const';

export default function Header() {
    const location = useLocation();
    const path = location.pathname;
    //Toggle Nav-bar / Header
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // LIGHT / DARK MODE
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <header className='w-full set-bg-light'>
            <nav className="py-2 px-[5%] grid grid-cols-2 justify-center items-center">

                <Link to="/" className="text-a icon-box w-12 hover:text-p dark:hover:text-Dp text-p dark:text-Dp"><Iattendease/></Link>

                <div
                    className="icon-box w-8 md:hidden justify-self-end"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    {isNavbarOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                </div>

                <ul className={`link-box relative py-4 flex-center items-start flex-col gap-4 justify-self-start  md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
                    {navLinks.map(item=>{
                        return(
                            <Link key={item.label} to={item.href} className={`btn-ghost-link text-sm ${path === item.href && "bg-slate-200 dark:bg-slate-700"}`}>{item.label}</Link>
                        )
                    })}
                    <button className="icon-box btn-icon p-2 w-10 cursor-pointer" onClick={toggleDarkMode}>{darkMode ? <BiMoon /> : <BiSun />}</button>
                </ul>
            </nav>
        </header >
    )
}
