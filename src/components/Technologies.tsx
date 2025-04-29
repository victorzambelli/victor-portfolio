import { technologies } from "../data/projects";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const Technologies = () => {
    const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
    const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

    return (
        <section id="knowledges" className="px-[10%] py-[6%] bg-zambelli-sec-black text-center">
            <div className="languages mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-12">Minhas tecnologias</h2>

                <TooltipProvider delayDuration={100}>
                    <div className="flex flex-wrap justify-center gap-10 mb-8">
                        {firstRow.map((tech) => (
                            <Tooltip key={tech.name}>
                                <TooltipTrigger asChild>
                                    <i
                                        className={`${tech.iconClass} text-4xl hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer`}
                                        aria-label={tech.name}
                                    />
                                </TooltipTrigger>
                                <TooltipContent sideOffset={5}>
                                    <p>{tech.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {secondRow.map((tech) => (
                            <Tooltip key={tech.name}>
                                <TooltipTrigger asChild>
                                    <i
                                        className={`${tech.iconClass} text-4xl hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer`}
                                        aria-label={tech.name}
                                    />
                                </TooltipTrigger>
                                <TooltipContent sideOffset={5}>
                                    <p>{tech.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </section>
    );
};

export default Technologies;
