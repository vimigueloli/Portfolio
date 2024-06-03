import React from "react";

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
    return (
        <div className="line-center w-72 h-96 rounded-md border border-white text-white">
            {project.name}
        </div>
    );
}
