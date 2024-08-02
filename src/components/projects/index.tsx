import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "@apollo/client";
import api from "@/services/api";
import { pinnedProjects } from "@/services/queriesGQL";
import { LoaderIcon } from "react-hot-toast";
import Project from "../project";
import VintageInternetProjects from "./vintageInternetProjects";
import styleTypes from "@/styles/stylesTypes";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
    const { loading, error, data } = useQuery(pinnedProjects);
    if (loading)
        return (
            <div className="h-full w-full line-center">
                <LoaderIcon />
            </div>
        );
    if (error)
        return (
            <div className="text-white text-4xl font-semibold">
                ⚠️ Falha ao carregar projetos.
            </div>
        );

    console.log(data.user.pinnedItems.nodes);

    const Element = styleTypes[`${process.env.STYLE}`].Projects;
    return <Element data={data} />;
}
