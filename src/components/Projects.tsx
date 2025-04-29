import { useState } from "react";
import { projectsData } from "../data/projects";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
    const [firstIndex, setFirstIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const [thirdIndex, setThirdIndex] = useState(0);
    const [fourthIndex, setFourthIndex] = useState(0);

    const handlePrevClick = () => {
        if (firstIndex > 0) setFirstIndex(firstIndex - 1);
        if (secondIndex > 0) setSecondIndex(secondIndex - 1);
        if (thirdIndex > 0) setThirdIndex(thirdIndex - 1);
        if (fourthIndex > 0) setFourthIndex(fourthIndex - 1);
    };

    const handleNextClick = () => {
        if (firstIndex < 2) setFirstIndex(firstIndex + 1);
        if (secondIndex < 2) setSecondIndex(secondIndex + 1);
        if (thirdIndex < 2) setThirdIndex(thirdIndex + 1);
        if (fourthIndex < 2) setFourthIndex(fourthIndex + 1);
    };

    return (
        <>
            <section className="flex justify-center pt-10">
                <Button
                    variant="outline"
                    className="w-24 h-12 text-white text-2xl bg-zambelli-sec-black mr-4 hover:bg-zambelli-dark-purple hover:translate-y-1"
                    onClick={handlePrevClick}
                >
                    <ArrowLeft />
                </Button>

                <Button
                    variant="outline"
                    className="w-24 h-12 text-white text-2xl bg-zambelli-sec-black hover:bg-zambelli-dark-purple hover:translate-y-1"
                    onClick={handleNextClick}
                >
                    <ArrowRight />
                </Button>
            </section>

            <section id="myprojects" className="px-[15%] pt-12 pb-[6.5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[10%] mb-20">
                    <ProjectCard
                        title={projectsData.firstdata[firstIndex].title}
                        description={projectsData.firstdata[firstIndex].description}
                        languages={projectsData.firstdata[firstIndex].languages}
                        image={projectsData.firstdata[firstIndex].image}
                        link={projectsData.firstdata[firstIndex].link}
                    />

                    <ProjectCard
                        title={projectsData.seconddata[secondIndex].title}
                        description={projectsData.seconddata[secondIndex].description}
                        languages={projectsData.seconddata[secondIndex].languages}
                        image={projectsData.seconddata[secondIndex].image}
                        link={projectsData.seconddata[secondIndex].link}
                    />

                    <ProjectCard
                        title={projectsData.thirddata[thirdIndex].title}
                        description={projectsData.thirddata[thirdIndex].description}
                        languages={projectsData.thirddata[thirdIndex].languages}
                        image={projectsData.thirddata[thirdIndex].image}
                        link={projectsData.thirddata[thirdIndex].link}
                    />

                    <ProjectCard
                        title={projectsData.fourthdata[fourthIndex].title}
                        description={projectsData.fourthdata[fourthIndex].description}
                        languages={projectsData.fourthdata[fourthIndex].languages}
                        image={projectsData.fourthdata[fourthIndex].image}
                        link={projectsData.fourthdata[fourthIndex].link}
                    />
                </div>
            </section>
        </>
    );
};

interface ProjectCardProps {
    title: string;
    description: string;
    languages: string;
    image: string;
    link: string;
}

const ProjectCard = ({ title, description, languages, image, link }: ProjectCardProps) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold mb-8">{title}</h2>
            <a href={link} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <img
                    src={image}
                    alt={`Imagem do projeto ${title}`}
                    className="project-image"
                />
            </a>
            <p className="text-zambelli-grey my-8">{description}</p>
            <span className="text-zambelli-purple">{languages}</span>
        </div>
    );
};

export default Projects;
