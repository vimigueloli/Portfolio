import React from "react";
import { ProjectProps, handleTitles } from ".";
import { FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function CollageProject({ project, id }: ProjectProps) {
    const bgOptions = [
        "https://www.pngkit.com/png/full/97-971838_paper-texture-rx-64-old-wrinkled-paper-png.png",
        "https://cdn.pixabay.com/photo/2018/04/25/21/18/shabby-paper-3350615_1280.png",
    ];

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
                style={{
                    backgroundImage: `url(${bgOptions[0]})`,
                }}
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
                        <div
                            className="-translate-y-16 border-4 shadow-md shadow-black/70 border-white w-12 h-12 rounded-full line-center outline-4 outline-red-500"
                            style={{
                                backgroundColor:
                                    //@ts-ignore
                                    languagesTypes[
                                        `${project.primaryLanguage.name.toLocaleLowerCase()}`
                                    ]?.color,
                            }}
                        >
                            {
                                //@ts-ignore
                                languagesTypes[
                                    `${project.primaryLanguage.name.toLocaleLowerCase()}`
                                ]?.icon
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full line-center">
                    <a
                        href={project.url}
                        target="_blank"
                        title={`Repositório ${handleTitles(project.name)}`}
                        className="w-16 st:w-16 st:h-16 translate-y-2  border-2 border-transparent with-transition hover:scale-125 z-50 line-center relative "
                    >
                        <div className=" -translate-y-5 z-50 line-center text-[#F2F0E9] absolute">
                            <FaGithub size={15} />
                        </div>
                        <div className="z-40">
                            <img className=" " src={pin} />
                        </div>
                        <div className="w-4 rounded-full blur-md rotate-45 translate-x-6 h-full bg-black/40 absolute" />
                    </a>
                </div>
                <div className="line-center font-face-collage translate-y-3 w-full px-6 text-black st:px-4 pt-0 text-center st:text-justify font-mono font-semibold text-3xl st:text-4xl">
                    {handleTitles(project.name)}
                </div>
                <div className="line-center text-justify h-32 px-6 st:px-8 font-bold text-sm text-black">
                    {project.shortDescriptionHTML}
                </div>
                <a
                    className="line-center mt-4 st:mt-0 w-full relative -rotate-3 cursor-pointer hover:rotate-0 with-transition"
                    href={project.homepageUrl}
                    target="_blank"
                    title={`Abrir ${handleTitles(project.name)}`}
                >
                    <div className="w-[200px] st:w-[250px] z-50 h-[105px] st:h-[130px] bg-white shadow-md shadow-black/80 rotate-6 absolute" />
                    <div className="w-[200px] st:w-[250px] z-50 h-[105px] st:h-[130px] items-end line-center shadow-md shadow-black/80">
                        <img
                            src={project.openGraphImageUrl}
                            className="w-full h-full bg-cover"
                        />
                    </div>
                </a>
            </div>
            <div className="w-full  h-full absolute bg-white  hidden"></div>
        </div>
    );
}
