import React from "react";
import { ProjectProps, handleTitles } from ".";
import { FaGithub } from "react-icons/fa";

export default function VintageInternetProject({ project, id }: ProjectProps) {
    function sortRandonColor() {
        let selected = Math.floor(Math.random() * 4 + 1);
        switch (selected) {
            case 1:
                return "#30BFA5";
            case 2:
                return "#D91E41";
            case 3:
                return "#F2921D";
            case 4:
                return "#D91E41";
            default:
                return "#F2921D";
        }
    }

    return (
        <a
            href={project.homepageUrl}
            target="_blank"
            title={`Abrir ${handleTitles(project.name)}`}
            style={{ borderColor: sortRandonColor() }}
            className={`w-72 h-72 st:w-96 st:h-96  -translate-x-2 -translate-y-2  border-4 text-[#011826] cursor-pointer hover:scale-110 with-transition`}
        >
            <div className=" translate-x-2 translate-y-2 line-between overflow-hidden relative flex-col bg-white w-72 h-72 st:w-96 st:h-96 border border-[#011826]">
                <div className="w-full h-full line-right items-start absolute p-4 -translate-y-1 translate-x-2">
                    <div
                        className={`line-center w-6 h-6 st:w-10 st:h-10 border-2 border-[#011826] absolute -translate-x-1 -translate-y-1`}
                    ></div>
                    <a
                        href={project.url}
                        target="_blank"
                        title={`Repositório ${handleTitles(project.name)}`}
                        className="w-6 h-6 st:w-10 st:h-10  bg-black  text-white border-2 border-transparent with-transition shadow-xl z-50 line-center relative with-transition hover:border-black hover:text-black hover:bg-white"
                    >
                        <FaGithub size={25} />
                    </a>
                </div>
                <div className="line-center w-full pt-4 font-semibold text-2xl">
                    <div
                        className={`border-b-8  -translate-y-3 -translate-x-2`}
                        style={{ borderColor: sortRandonColor() }}
                    >
                        <div className="translate-x-2 translate-y-3">
                            {handleTitles(project.name)}
                        </div>
                    </div>
                </div>
                <div className="line-center text-justify px-4 text-xs">
                    {project.shortDescriptionHTML}
                </div>
                <a
                    href={project.homepageUrl}
                    target="_blank"
                    title={`Abrir ${handleTitles(project.name)}`}
                    className="w-full h-2/3 items-end line-center"
                >
                    <img src={project.openGraphImageUrl} />
                </a>
            </div>
        </a>
    );
}
