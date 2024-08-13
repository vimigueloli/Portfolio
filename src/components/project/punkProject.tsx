import React from "react";
import { ProjectProps, handleTitles } from ".";
import { FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import styleTypes from "@/styles/stylesTypes";

export default function PunkProject({ project, id }: ProjectProps) {
    const bgList = styleTypes[`${process.env.STYLE}`].bg;

    const pin =
        "https://static.vecteezy.com/system/resources/thumbnails/012/419/385/small/red-notepaper-pin-ilustration-push-pin-isolated-on-the-white-background-free-png.png";

    const languagesTypes = {
        typescript: {
            icon: <SiTypescript size={18} />,
            color: "#3178c6",
        },
        html: {
            icon: <SiHtml5 size={18} />,
            color: "#e68a20",
        },
        javascript: {
            icon: <SiJavascript size={18} />,
            color: "#f0e330",
        },
        css: {
            icon: <SiCss3 size={18} />,
            color: "#314cc6",
        },
        java: {
            icon: <FaJava size={18} />,
            color: "#c63131",
        },
    };

    return (
        <div className="relative w-72 st:w-96 h-[400px] st:h-[435px]">
            <div
                className={`w-72 z-10 st:w-96 h-[400px] st:h-[435px] absolute bg-cover bg-center  bg-no-repeat text-black`}
            >
                <div className="w-72 st:w-96 h-[400px] st:h-[435px] absolute line-center items-end">
                    <div
                        className={`absolute w-72 st:w-96 h-6  text-right -translate-x-6 font-bold font-mono text-lg p-0 text-[#F2F0E9]`}
                        /*style={{
                            backgroundColor:
                                //@ts-ignore
                                colors[project.primaryLanguage.name.toLowerCase()],
                        }}*/
                    >
                        <div className="-translate-y-4 translate-x-3 border-4 bg-black border-white w-12 h-12 rounded-full line-center outline-4 outline-red-500">
                            {
                                //@ts-ignore
                                languagesTypes[
                                    `${project.primaryLanguage.name.toLocaleLowerCase()}`
                                ]?.icon
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full line-right">
                    <a
                        href={project.url}
                        target="_blank"
                        title={`Repositório ${handleTitles(project.name)}`}
                        className="w-16 st:w-16 st:h-16 translate-y-6 translate-x-2  border-2 border-transparent with-transition  z-50 line-center relative hover:scale-110 "
                    >
                        <div className=" -translate-y-8 z-50 line-center bg-white rounded-full p-1   text-black absolute hover:text-white hover:bg-black with-transition">
                            <FaGithub size={35} />
                        </div>
                    </a>
                </div>
                <div className="line-center translate-y-3 w-full px-6 st:px-4 pt-0 text-center st:text-justify font-mono font-semibold text-3xl st:text-4xl">
                    <div className=" px-2 text-center font-face-punk -skew-y-3 relative -skew-x-6 ">
                        <div className="w-full h-full bg-white skew-x-6 skew-y-3 absolute" />
                        <div className="w-full h-full bg-black -bg-[#0e041a] absolute" />
                        <div className="font-face-punk translate-x-2 text-white">
                            {handleTitles(project.name)}
                        </div>
                    </div>
                </div>
                <div className="line-left w-full mt-8 bg-white text-center st:text-justify font-mono font-semibold text-sm st:text-sm">
                    <div className="w-full h-40 text-left font-face-punk relative">
                        <div className="w-full h-full bg-white -skew-x-6 -skew-y-3 absolute" />
                        <div className="w-full h-full bg-black -bg-[#0e041a] skew-x-6 skew-y-3 absolute text-white line-center text-justify px-4">
                            {project.shortDescriptionHTML}
                        </div>
                    </div>
                </div>
                <a
                    className="line-center mt-4 translate-x-4 st:mt-8 w-full relative cursor-pointer with-transition skew-x-3 skew-y-6 hover:skew-y-0 hover:skew-x-0 with-transition"
                    href={project.homepageUrl}
                    target="_blank"
                    title={`Abrir ${handleTitles(project.name)}`}
                >
                    <div className="w-[200px] st:w-[250px] z-50 h-[105px] st:h-[130px] bg-white shadow-lg  shadow-purple-950/80 absolute " />
                    <div className="w-[200px] st:w-[250px] z-50 h-[105px] st:h-[130px] items-end line-center -skew-x-6 -skew-y-12 shadow-md shadow-purple-950/50 hover:skew-y-0 hover:skew-x-0 with-transition">
                        <img
                            src={project.openGraphImageUrl}
                            className="w-full h-full bg-cover"
                        />
                    </div>
                </a>
            </div>
            <div
                className="w-full  h-full absolute bg-cover bg-center skew-y-6 skew-x-6 bg-[#602ed4] backdrop-blur-sm mix-blend-overlay border-4 border-white"
                /*style={{
                    backgroundImage: `url(${bgList[5]})`,
                }}*/
            ></div>
        </div>
    );
}
