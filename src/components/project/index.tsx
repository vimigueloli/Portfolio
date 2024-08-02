import React from "react";
import { FaGithub } from "react-icons/fa";
import VintageInternetProject from "./vintageInternetProject";
import styleTypes from "@/styles/stylesTypes";

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

export interface ProjectProps {
    id: string;
    project: RepoProps;
}

export function handleTitles(title: string) {
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

export default function Project({ id, project }: ProjectProps) {
    const Element = styleTypes[`${process.env.STYLE}`].Project;
    return <Element project={project} id={id} />;
}
