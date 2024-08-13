import React from "react";
import { ProjectProps, handleTitles } from ".";
import { FaGithub } from "react-icons/fa";

export default function FlatProject({ project, id }: ProjectProps) {
    const colors = {
        typescript: "#383B73",
        python: "#407338",
        javascript: "#BF8A26",
        html: "#BF7826",
        css: "#2670BF",
        java: "#BF3C1F",
    };
    console.log("projeto =>", project.primaryLanguage.name.toLowerCase());

    return (
        <div
            //href={project.homepageUrl}
            //target="_blank"
            //title={`Abrir ${handleTitles(project.name)}`}
            className={`w-72 st:w-96 h-[400px] st:h-[435px] bg-[#F2F0E9] text-[#343131]  hover:scale-110 with-transition`}
        >
            <div className="w-72 st:w-96 h-[400px] st:h-[435px] absolute line-center items-end">
                <div
                    className={`absolute w-72 st:w-96 h-6  text-right px-2 z-50 font-bold font-mono text-lg p-0 text-[#F2F0E9]`}
                    style={{
                        backgroundColor:
                            //@ts-ignore
                            colors[project.primaryLanguage.name.toLowerCase()],
                    }}
                >
                    <div className="-translate-y-[2px]">
                        {project.primaryLanguage.name.toUpperCase()}
                    </div>
                </div>
            </div>
            <a
                href={project.url}
                target="_blank"
                title={`Repositório ${handleTitles(project.name)}`}
                className="w-6 h-6 st:w-10 st:h-10   bg-[#343131]  text-[#F2F0E9] with-transition hover:bg-[#f2f0e9] hover:text-[#343131] border-2 border-transparent with-transition shadow-xl z-50 line-center relative "
            >
                <FaGithub size={25} />
            </a>
            <div className="line-center w-full px-6 st:px-4 pt-4 text-center st:text-justify font-mono font-semibold text-3xl st:text-4xl">
                {handleTitles(project.name)}
            </div>
            <div className="line-center text-justify h-32 px-6 st:px-4 text-sm">
                {project.shortDescriptionHTML}
            </div>
            <div className="line-center mt-6 st:mt-0 w-full z-50 cursor-pointer">
                <a
                    href={project.homepageUrl}
                    target="_blank"
                    title={`Abrir ${handleTitles(project.name)}`}
                    className="w-[200px] st:w-[250px] bg-green-500 z-50 h-[100px] st:h-[125px] items-end line-center"
                >
                    <img
                        src={project.openGraphImageUrl}
                        className="w-full h-full bg-cover"
                    />
                </a>
            </div>
        </div>
    );
}
