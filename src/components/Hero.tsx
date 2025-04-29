import { useTypewriter } from "../hooks/useTypewriter";
import programmerImg from "../assets/Programmer.svg";
import scrollImg from "../assets/scroll.png";

const Hero = () => {
    const { displayText } = useTypewriter("Victor Zambelli");

    return (
        <section id="home" className="min-h-[60vh] px-[15%] py-[6.5%] flex justify-around items-center relative">
            <div className="w-full md:w-1/2 my-20">
                <p className="text-zambelli-grey text-xl md:text-2xl uppercase my-4">Olá, eu sou</p>

                <div className="flex items-center">
                    <span className="text-zambelli-purple text-3xl md:text-5xl font-semibold tracking-wider uppercase">
                        {displayText}
                    </span>
                    <span className="inline-block relative w-[3px] h-[30px] md:h-[42px] bg-zambelli-white top-[3px] animate-blink"></span>
                </div>

                <p className="text-zambelli-grey text-xl md:text-2xl uppercase my-4">Desenvolvedor FullStack</p>

                <div>
                    <a href="https://github.com/victorzambelli/" target="_blank" rel="noreferrer">
                        <button className="home-button">Github</button>
                    </a>
                    <a href="https://www.linkedin.com/in/victor-zambelli/" target="_blank" rel="noreferrer">
                        <button className="home-button">Linkedin</button>
                    </a>
                </div>
            </div>

            <div className="hidden md:block w-2/5 my-8">
                <img
                    src={programmerImg}
                    alt="Ilustração de um Programador"
                    className="w-full"
                />
            </div>

            <div className="absolute bottom-4 font-bold tracking-wider">
                <a href="#aboutme" className="flex flex-col items-center">
                    <p className="py-4 text-xs text-zambelli-grey">scroll down</p>
                    <img src={scrollImg} alt="Setinha indicando para rolar a tela para baixo" className="animate-scroll-down" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
