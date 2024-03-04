import { NavLink } from "react-router-dom";
import Logo from '@/assets/img/companies.svg';
import { useState } from "react";
import cn from "@/lib/util";

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navStyles = 'flex-col text-lg fixed right-0 top-14 w-80 bg-white h-full z-10 translate-x-80 transition duration-500 pl-7 pt-7 lg:pl-0 lg:pt-0 lg:w-auto lg:static lg:flex-row lg:translate-x-0 lg:flex';
    const overlayStyles = 'fixed hidden left-0 top-14 bottom-0 right-0 h-full bg-blue-500 lg:hidden'

    return (
        <header className="fixed border-b border-gray-200 px-4 py-0.5 top-0 w-full flex justify-between items-center min-h-14">
            <NavLink to={'/'}>
                <img src={Logo} alt="logo" />
            </NavLink>
            <div className={cn(navStyles, isNavOpen && 'translate-x-0')}>
                <div className="flex flex-col lg:flex-row mb-4 lg:mb-0 after:hidden lg:after:block after:bg-gray-200 after:mr-3 after:w-0.5">
                    <NavLink className="mb-1 hover:text-primary lg:mb-0 lg:mr-3 last:mb-0" to={'/location'}>Moving companies</NavLink>
                    <NavLink className="mb-1 hover:text-primary lg:mb-0 lg:mr-3 last:mb-0" to={'/contact-us'}>Contact us</NavLink>
                </div>
                <div className="flex text-primary">
                    <NavLink className={({ isActive }) =>
                        [
                            isActive ? "brightness-75 hover:brightness-75 ml-1" : "hover:brightness-75 ml-1",
                        ].join("")
                    } to={'/login'}>Login</NavLink> /
                    <NavLink className="ml-1 hover:brightness-75" to={'/new-user'}>Sign Up</NavLink>
                </div>
            </div>
            <div className="relative flex flex-col justify-between h-5 w-7 lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                <span className={cn('w-full h-0.5 top-2.5 transition-transform bg-black', isNavOpen && 'rotate-45 absolute')}></span>
                <span className={cn('w-full h-0.5 bg-black', isNavOpen && 'hidden')}></span>
                <span className={cn('w-full h-0.5 top-2.5 transition-transform bg-black', isNavOpen && '-rotate-45 absolute')}></span>
            </div>
            <div className={cn(overlayStyles, isNavOpen && 'block bg-slate-400/15 backdrop-blur-sm')} onClick={() => setIsNavOpen(!isNavOpen)}></div>
        </ header>
    )
}