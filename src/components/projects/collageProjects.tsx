import React from "react";
import Project from "../project";

interface ProjectsProps {
    data: any;
}

export default function CollageProjects({ data }: ProjectsProps) {
    return (
        <div className="line-center flex-wrap gap-16 w-full sm:w-3/4    pb-48 h-full text-white">
            {data.user.pinnedItems.nodes.map((item: any) => (
                <Project id={item.id} project={item} />
            ))}
        </div>
    );
}
