import { useState, useEffect } from "react";

const links = ["Home", "How it works", "Features", "Pricing"];

export default function Navbar(){
    const [isOpen, setISOpen] = useState(false);

    useEffect(() => {
        document.body.style.overfloe = isOpen ? "hidden" : "";
        return() => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return(
        <header className='p-0 lg:p-6'>
            <nav className="mx-auto flex max-w-5xl items-center justify-between bg-white px-6 py-4 shadow-md lg:rounded-xl">
                <a href="#" className="text-lg font-bold text-green-600">
                    Logo
                </a>

                <div className="hiddem items-center gap-8 lg:flex">
                    <ul className="flex items-center gap-8">
                        {links.map((link) =>(
                            <li key={link}>
                                <a href="#" className="text-sm text-green-700 hover:text-green-900">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                        Create Account
                    </button>
                </div>

                <button
                    onClick={() => setISOpen(true)}
                    aria-label="Opem menu"
                    className="text-2xl text-green-700 lg:hidden"
                >
                    #
                </button>
            </nav>

            <div
                className={`fixed inset-0 z-50 flex flex-col bg-green-600 px-6 py-5 text-white transition-all duration-300 ease-in-out md:inset-x-4 md:top-4 md:bottom-auto md:rounded-xl md:shadow-xl lg:hidden ${isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}>
                
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Logo</span>
                    <button
                        onClick={()=> setISOpen(false)}
                        aria-label="Close menu"
                        className="text-2xl"
                    >
                        CLOSE
                    </button>
                </div>

                <div className="flex flex-1 flex-col md:mt-4 md:flex-none md:flex-row md:items-center md:justify-between">
                    <ul className="flex flex-1 flex-col items-center justify-center gap-8 md:flex-none md:flex-row">
                        {links.map((link) => (
                            <li key={link}>
                                <a href="#" onClick={() => setISOpen(false)} className="text-sm">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setISOpen(false)}
                        className="mb-10 self-center rounded bg-white px-5 py-2 text-sm font-medium text-green-700 md:mb-0 md:self-auto"
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </header>
    );
}