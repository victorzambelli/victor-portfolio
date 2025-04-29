import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full z-50">
            <nav className="bg-zambelli-sec-black flex items-center justify-between px-[15%] py-5 border-b-2 border-zambelli-purple">
                <h2>
                    <a href="#home" className="text-zambelli-white font-semibold text-xl transition-colors duration-300 hover:text-zambelli-purple">
                        ‹Victor <span className="text-zambelli-purple">Z</span>/›
                    </a>
                </h2>

                <ul className="hidden md:flex">
                    {["home", "aboutme", "myprojects", "knowledges"].map((item) => (
                        <li key={item} className="list-none px-5 py-2.5">
                            <a
                                href={`#${item}`}
                                className="no-underline text-zambelli-white font-semibold text-lg transition-colors duration-300 hover:text-zambelli-purple"
                            >
                                {item === "home" && "Início"}
                                {item === "aboutme" && "Sobre"}
                                {item === "myprojects" && "Projetos"}
                                {item === "knowledges" && "Experiência"}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="relative md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Menu"
                        className="text-zambelli-purple text-3xl cursor-pointer"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 bg-zambelli-sec-black min-w-[130px] shadow-lg z-10">
                            {["home", "aboutme", "myprojects", "knowledges"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="text-zambelli-white py-3 px-4 no-underline block text-center transition-colors duration-300 hover:text-zambelli-purple"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item === "home" && "Início"}
                                    {item === "aboutme" && "Sobre"}
                                    {item === "myprojects" && "Projetos"}
                                    {item === "knowledges" && "Experiência"}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
