import React from "react";
import { FaGithub } from "react-icons/fa";

interface RepoProps {
    id: any;
    name: string;
    licenseInfo: {
        name: string;
    };
    openGraphImageUrl: string;
    homepageUrl: string;
    primaryLanguage: {
        name: string;
        color: string;
    };
    languages: {
        nodes: {
            name: string;
            color: string;
        }[];
    };
    shortDescriptionHTML: string;
    url: string;
    usesCustomOpenGraphImage: boolean;
}

interface ProjectProps {
    id: string;
    project: RepoProps;
}

export default function Project({ id, project }: ProjectProps) {
    function handleTitles(title: string) {
        let input = title.replace("_", " ");
        input = input.replace("-", " ");
        let titles = input.split(" ");
        let output = "";
        titles.forEach((item: string) => {
            output += item[0].toUpperCase() + item.substring(1);
        });
        output = output.replace(/([a-z])([A-Z])/g, "$1 $2");
        output = output.replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
        return output.trim();
    }

    return (
        <a
            href={project.homepageUrl}
            target="_blank"
            title={`Abrir ${handleTitles(project.name)}`}
            className="line-between overflow-hidden relative flex-col w-96 h-96 rounded-xl border border-white text-white cursor-pointer hover:scale-110 with-transition"
        >
            <div className="w-full h-full line-right items-end absolute p-4 ">
                <a
                    href={project.url}
                    target="_blank"
                    title={`Repositório ${handleTitles(project.name)}`}
                    className="w-10 h-10 rounded-md bg-black/50 backdrop-blur-xl border border-transparent with-transition shadow-xl z-50 line-center hover:border-white"
                >
                    <FaGithub size={25} />
                </a>
            </div>
            <div className="line-center w-full pt-4 font-semibold text-2xl">
                {handleTitles(project.name)}
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
        </a>
    );
}
